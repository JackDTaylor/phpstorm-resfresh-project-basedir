# phpstorm-resfresh-project-basedir
A [ScriptMonkey](https://plugins.jetbrains.com/plugin/3674-script-monkey) script to add a PHPStorm action to refresh project basedir.

### How does it work?
After the action call, it refreshes the project 7 times every 500 ms.

### How can I install it?
Add [/resfresh-project-basedir.js](https://github.com/JackDTaylor/phpstorm-resfresh-project-basedir/blob/master/resfresh-project-basedir.js) file in ScriptMonkey settings. Don't forget to reopen project after the script installation.

### How can I run it?
You can find a "Refresh Project Basedir" action under the "Tools" menu.

### How can I use it?
You can use it in your own scripts and macroses. For example, you can create a macros named "SaveAllEx" with the default "Save All" and this "Refresh Project Basedir" actions and bind it to the Ctrl+S shortcut to make your IDE look for external changes after you save your files.

This might be useful if you're uploading files on change and use some postprocessor like `webpack -w` to build the output file locally and then upload it to the remote server. Just make sure your "Skip external changes" checkbox is off.

#### Performance concerns
Yes, I thought about something like "Isn't *scanning the whole project dir for seven fuckin times after the every file save* a symptom of some sort of mental illness or something?", but I found no significant impact on performance with this approach. So it is **COMPLETELY SAFE**, use it at your own risk.
