import { Injectable, Logger } from '@nestjs/common';
import * as S3 from 'aws-sdk/clients/s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3ConfigProvider {
  private readonly _s3: S3;
  private readonly _bucketName: string;
  private readonly configService: ConfigService;
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger(S3ConfigProvider.name);
    this.configService = new ConfigService();
    this._bucketName = this.configService.get('AWS_BUCKET_NAME');
    this._s3 = new S3({
      accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      s3ForcePathStyle: true,
      region: this.configService.get('AWS_REGION'),
      logger: console,
    });
  }

  getS3() {
    return this._s3;
  }

  getBucketName() {
    return this._bucketName;
  }

  createBucket() {
    this.getS3().createBucket({ Bucket: 'curriculo-bucket' }, (err, data) => {
      this.logger.log(`Bucket criado com sucesso: ${data}`);
    });
  }
}
