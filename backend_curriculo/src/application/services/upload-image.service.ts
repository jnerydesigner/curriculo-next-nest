import { Injectable, Logger } from '@nestjs/common';
import { S3ConfigProvider } from '@providers/s3.provider';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Injectable()
export class UploadImageService {
  private readonly configService: ConfigService;
  private readonly s3Provider: S3ConfigProvider;
  private readonly logger: Logger;

  constructor() {
    this.s3Provider = new S3ConfigProvider();
    this.logger = new Logger(UploadImageService.name);
    this.configService = new ConfigService();
  }

  async upload(file: Express.Multer.File) {
    return await this.uploadS3(file);
  }

  async uploadS3(file: Express.Multer.File) {
    const fileContent = fs.readFileSync(file.path);
    const s3 = this.s3Provider.getS3();
    const s3Params = {
      Bucket: this.configService.get('AWS_BUCKET_NAME'),
      Key: String(file.filename),
      Body: fileContent,
    };

    const data = await this.uploadImageToS3(s3, s3Params);

    return data;
  }

  async uploadImageToS3(s3: S3, s3Params) {
    return new Promise((resolve, reject) => {
      s3.upload(s3Params, (err, data) => {
        if (err) {
          this.logger.error(`Erro Provider: ${err}`);
          reject(err);
        }
        resolve(data);
      });
    });
  }

  async deleteFileFromS3(fileUrl: string) {
    const key = fileUrl.replace(
      this.configService.get('AWS_BUCKET_PREFIX'),
      '',
    );

    const s3 = this.s3Provider.getS3();

    const params = {
      Bucket: this.configService.get('AWS_BUCKET_NAME'),
      Key: key,
    };

    return new Promise((resolve, reject) => {
      s3.deleteObject(params, (err, data) => {
        if (err) {
          this.logger.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
