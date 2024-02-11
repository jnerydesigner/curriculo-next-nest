import { IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';
import { Expose } from 'class-transformer';

export class FileAvatarBucketResponseDTO {
  @IsString()
  @Expose()
  fieldname: string;

  @IsString()
  @Expose()
  originalname: string;

  @IsString()
  @Expose()
  encoding: string;

  @IsString()
  @Expose()
  mimetype: string;

  @IsNumber()
  @Expose()
  size: number;

  @IsString()
  @Expose()
  bucket: string;

  @IsString()
  @Expose()
  key: string;

  @IsString()
  @Expose()
  acl: string;

  @IsString()
  @Expose()
  contentType: string;

  @IsOptional()
  @Expose()
  contentDisposition: null | string;

  @IsOptional()
  @Expose()
  contentEncoding: null | string;

  @IsString()
  @Expose()
  storageClass: string;

  @IsOptional()
  @Expose()
  serverSideEncryption: null | string;

  @IsOptional()
  @Expose()
  metadata: undefined | any;

  @IsUrl()
  @Expose()
  location: string;

  @IsString()
  @Expose()
  etag: string;

  @IsOptional()
  @Expose()
  versionId: undefined | string;
}
