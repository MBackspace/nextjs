import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { I18nModule, I18nJsonLoader, QueryResolver, HeaderResolver, CookieResolver, AcceptLanguageResolver } from 'nestjs-i18n';
import * as path from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n'),
        includeSubfolders: true
      },
      loader: I18nJsonLoader,
      resolvers: [
        new QueryResolver(['lang', 'l']),
        new HeaderResolver(['x-custom-lang', 'x-i18next-current-language']),
        new CookieResolver(['i18next']),
        AcceptLanguageResolver
      ]
    }),
    MongooseModule.forRoot(process.env.MONGO_URL ?? 'mongodb://localhost:27017/nextjs')
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
