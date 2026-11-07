# TEITELBAUM.RU — Инструкция по публикации (GitHub Pages / VPS Nginx)

Этот архив содержит полностью готовую к публикации версию **https://teitelbaum.ru** с сохранённым файлом `CNAME` (`teitelbaum.ru`), оптимизированными медиафайлами (`assets/`), `robots.txt` и `sitemap.xml`.

## Вариант 1: Обновление на GitHub Pages (без изменения настроек DNS)
1. Распакуйте содержимое архива в папку вашего локального репозитория `teitelbaum.ru`.
2. Убедитесь, что файл `CNAME` (`teitelbaum.ru`) остаётся в корне проекта.
3. Выполните в Терминале на вашем MacBook:
   ```bash
   git add .
   git commit -m "feat: launch TEITELBAUM Liquid Glass personal digital experience"
   git push origin main
   ```

## Вариант 2: Развёртывание на собственном Ubuntu VPS (Nginx)
```bash
scp -r index.html assets robots.txt sitemap.xml root@ВАШ_VPS:/var/www/teitelbaum.ru/
```
