import slugify from 'slugify';

export class GenerateSlug {
  static execute(text: string): string {
    return slugify(text, {
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
      strict: true,
      locale: 'pt',
      trim: true,
    });
  }
}
