# 🌤️ Weather Desktop App — Angular + Electron

Полноценное погодное приложение, построенное на **Angular + Electron**, с красивым UI, продуманной архитектурой и расширенным функционалом.

## 🚀 Основные фичи

- 🔍 Поиск города и отображение погоды
- 📆 Прогноз на 7 и 14 дней
- 🌙 Dark / Light темы
- 📍 Автодетект по геолокации
- ⚙️ Кэширование и избранные города
- 🧠 Разделение на Angular модули, lazy loading
- 🔐 Авторизация
- 🕓 История запросов
- 🌐 Локализация (RU / EN)
- 🖥️ Electron: оффлайн-доступ, иконка в трее и автозапуск

---

## 🧱 Технологии

- **Angular 18.1.0**
- **Electron 35.1.4**
- **RxJS / Signals / Services**
- **SCSS / Angular Material**
- **Weatherapi**
- **Firebase Auth / Firestore (по желанию)**
- **LocalStorage, Interceptors, Guards**
- **PWA-совместимость**

---

## ⚙️ Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки (Angular)
ng serve

# Сборка Electron версии
npm run electron:build
