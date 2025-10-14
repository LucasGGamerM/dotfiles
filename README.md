# My dotfiles
## Structure:
They are organized as _stow_ packages, so it would be preferred if you used stow to manage them.
## How to apply
This will overwrite some custom settings, so, if you have made a custom neovim or tmux config, please back them up before running these commands!

### If you wish to apply *ALL* of them, open up a terminal in your home directory and run these commands:
```
git clone https://github.com/LucasGGamerM/dotfiles.git
cd dotfiles
stow --adopt -R *
git reset --hard
```
### If you wish to apply just one or more configuration packages, run this instead:
```
git clone https://github.com/LucasGGamerM/dotfiles.git
cd dotfiles
stow --adopt -R tmux # add other packages here
git reset --hard
```
The previous commands will apply my _tmux_ configuration, but if you wish to apply other configurations, you can just append the configuration packages you want to the command.
