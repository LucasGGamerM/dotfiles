# .bash_profileg

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
    . ~/.bashrc
fi

# User specific environment and startup programs

# From Pop!_OS:
# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

# User added
export ANDROID_HOME="$HOME/Android/Sdk"
# export __NV_DISABLE_EXPLICIT_SYNC=1
export EDITOR="/usr/bin/nvim"
# export NVD_BACKEND=direct
# export MOZ_DISABLE_RDD_SANDBOX=1

# if [[ -n $DISTROBOX_ENTER_PATH ]]; then
    # Set your locale variables and export them
#    export LANGUAGE=en-CA:pt-BR
# fi

# export ELECTRON_OZONE_PLATFORM_HINT=auto
