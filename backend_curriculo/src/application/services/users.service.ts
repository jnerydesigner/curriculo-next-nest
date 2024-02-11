import { ImageResponseDTO } from '@dtos/image-upload.dto';
import { PersonalDataMapper } from '@mappers/personal-data.mapper';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { IPersonalDatasRepository } from '@repositories/interfaces/personal-datas-repository.interface';
import { IUserRepository } from '@repositories/interfaces/user-repository.interface';
import * as fs from 'node:fs';
import { UploadImageService } from './upload-image.service';
import * as path from 'path';

import * as sharp from 'sharp';

@Injectable()
export class UsersService {
  private readonly logger: Logger;
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly usersRepository: IUserRepository,
    @Inject('PERSONAL_DATA_REPOSITORY')
    private readonly personalDataRepository: IPersonalDatasRepository,
    private readonly uploadImageService: UploadImageService,
  ) {
    this.logger = new Logger(UsersService.name);
  }
  async findUser(userId: string) {
    const user = await this.usersRepository.findById(userId);

    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    return user;
  }

  async find(username: string) {
    const users = await this.findAll();

    const user = users.usuarios.find(
      (usuario) => usuario.username === username,
    );

    return user;
  }

  async findAll() {
    return {
      usuarios: [
        {
          nome: 'Paulo',
          username: 'paulo@email.com',
          endereco: 'av paulista',
          telefone: '1155555555',
        },
        {
          nome: 'Maria',
          username: 'maria@email.com',
          endereco: 'av faria lima',
          telefone: '1155555580',
        },
        {
          nome: 'Samantha',
          username: 'samantha@email.com',
          endereco: 'av paulista',
          telefone: '1155555590',
        },
      ],
    };
  }

  async uploadAvatar(file: Express.Multer.File, userId: string) {
    const extension = path.parse(file.filename).ext;

    const imagePath = `./upload/files/`;

    const key = file.filename.replace(extension, '');

    const newFileNameExtension = `${key}.png`;

    await this.resizeImage(file.path, imagePath, newFileNameExtension)
      .then(() => {
        return new Promise((resolve, reject) => {
          fs.unlink(file.path, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(true);
            }
          });
        });
      })
      .catch((err) => {
        this.logger.error(
          'Erro ao redimensionar a imagem ou excluir o arquivo:',
          err,
        );

        throw err;
      });

    const newImageUpload: Express.Multer.File = {
      ...file,
      originalname: newFileNameExtension,
      filename: newFileNameExtension,
      path: `${imagePath}${newFileNameExtension}`,
    };

    const personalData = PersonalDataMapper.toResponse(
      await this.personalDataRepository.findByUserId(userId),
    );

    await this.uploadImageService.deleteFileFromS3(personalData.avatarUrl);

    const fileAvatarBucketResponse: ImageResponseDTO =
      await this.uploadImageService.upload(newImageUpload);

    const personalDataAvatar = {
      ...personalData,
      avatarUrl: fileAvatarBucketResponse.Location,
    };

    const updateAvatar = PersonalDataMapper.toResponse(
      await this.personalDataRepository.update(
        personalDataAvatar.id,
        personalDataAvatar,
      ),
    );

    new Promise((resolve, reject) => {
      fs.unlink(newImageUpload.path, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });

    return updateAvatar;
  }

  resizeImage(
    filePath: string,
    imagePath: string,
    newFileNameExtension: string,
  ): Promise<any> {
    return sharp(filePath)
      .resize(500)
      .png({ quality: 70 })
      .toFile(`${imagePath}${newFileNameExtension}`);
  }

  updateBio(userId: string, bio: string) {
    return this.usersRepository.updateBio(userId, bio);
  }
}
