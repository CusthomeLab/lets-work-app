#!/usr/bin/env osascript

on run
	set argsCmd to "docker-sync-stack start"
	set argsPwd to "cd Documents/Projets/webApp"
	scriptRun(argsCmd, argsPwd)
end run

on scriptRun(argsCmd, argsPwd)
	set withCmd to (argsCmd)
	set withPwd to (argsPwd)
	CommandRun(withCmd, withPwd)
end scriptRun

on CommandRun(withCmd, withPwd)
	tell application "iTerm"
		if it is running then
			if application "iTerm" is running then
      splitPane(withPwd, withCmd) of me
      end if
    else
      activate application "iTerm"
      splitPane(withPwd, withCmd) of me
    end if
  end tell
end CommandRun


on SplitPane(argsPwd, argsCmd)
  tell application "iTerm"
      tell the current window
        create tab with default profile
      end tell
      tell first session of current tab of current window
        split vertically with default profile
        write text argsPwd
      end tell
      tell second session of current tab of current window
        write text argsPwd
        write text argsCmd
      end tell
    end tell
end SplitPane