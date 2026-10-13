# Trading Journal – Android app

Your HTML journal, packaged as a real Android app (Capacitor). Data is stored on the phone, works offline, and Export JSON/CSV opens the Android share sheet so you can save backups to Drive/Files.

## Get the APK (no Android Studio needed)

GitHub builds it for you in the cloud:

1. Create a free GitHub account and a new repository (private is fine).
2. Upload everything in this folder to the repo, keeping the folder structure
   (`www/`, `assets/`, `scripts/`, `.github/workflows/android.yml`, `package.json`, `capacitor.config.json`, `.gitignore`).
   Easiest on a computer: unzip, then drag the contents into the repo page ("Add file" → "Upload files").
   Make sure the hidden `.github` folder is included.
3. Open the **Actions** tab → **Build Android APK** → **Run workflow** (it also runs on every push).
4. After ~5–8 minutes, open the finished run → **Artifacts** → download `trading-journal-apk` (a zip containing `app-debug.apk`).
5. On the phone: unzip, open `app-debug.apk`, allow "Install unknown apps" for your file manager/browser when asked, install.

## Updating the app

Edit `www/index.html`, commit, and the workflow builds a new APK. Install it over the old one – your data is kept as long as the app ID (`com.chase.tradingjournal` in `capacitor.config.json`) doesn't change.

**Important:** every build uses a fresh debug signing key, so a new APK from a *different* build environment can refuse to install over the old one. If that happens, Export JSON first, uninstall, install the new APK, then Import JSON. (A fixed signing key avoids this – ask and I'll set it up.)

## Changing the name or icon

- Name / app ID: `capacitor.config.json`
- Icon: replace the PNGs in `assets/` (`icon-only.png`, `icon-foreground.png`, `icon-background.png`, 1024×1024)

## Run locally (optional, needs Node 22, Java 21, Android SDK)

```
npm install
npm run prepare-web
npx cap add android
npx capacitor-assets generate --android --assetPath assets
npx cap sync android
cd android && ./gradlew assembleDebug
```
