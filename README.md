# BillEz
Why stand in queue when you can BILL easyy!!


# Getting Started 

git clone https://github.com/Prosecutor1x/BillEz.git

npm install





# Running on your android device 

1. Enable Debugging over USB
Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB Debugging on your device in order to install your app during development.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to Settings → About phone → Software information and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".

2. Plug in your device via USB
Let's now set up an Android device to run our React Native projects. Go ahead and plug in your device via USB to your development machine.

Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running adb devices.

$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device

Seeing device in the right column means the device is connected. You must have only one device connected at a time.

3. Run your app
Type the following in your command prompt to install and launch your app on the device:

$ npx react-native run-android


# HOW TO MAKE PR:

1. git checkout -b branchname
2. git add .
3. git commit -m 'Commit message'
4. git push origin branchname