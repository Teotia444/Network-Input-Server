# Network Input Server
Experimental Aroma plugin to connect wii u inputs to OJD
This project contains a modified version of https://github.com/CelestinaDragoni/open-joystick-display, credits to the people who worked on it for the different GUIs and input display skins.

## Overview
Here is a video showing the input viewer in action:
https://youtu.be/jQXIh98hrnE 
As this is using OJD, you can use any features OJD gives you. This includes chroma keys, skins, etc...

## Setups
Head to the releases tab and download both the .wps file and the windows app. Copy the .wps file on the Wii U's sd card to the path `sd:\wiiu\environments\aroma\plugins\`. Start the Wii U on Aroma and check your config menu (L + Dpad Down + Select) and navigate to Network Input Server. You should see your current IP address, note it down somewhere.
On the PC, launch the windows app and configure the left tab as follow :
![image](https://github.com/user-attachments/assets/20e1a510-1fab-487c-becc-8de2c9fad806)

You can also set a chroma key, a profile window size, etc. You can also configure the right tab to your liking, like ajusting the deadzones and such.
Once this is done, make sure you are in game on the Wii U, and hit "Reload" on the top left. Once this is done, you can press ESC to go to broadcast mode.
