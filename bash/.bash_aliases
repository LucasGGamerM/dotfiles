#alias spotdl="python3 -m spotdl"
alias gtmm="cd ~/AndroidStudioProjects/LucasGGamerM/moshidon.git/master/"
alias gtm="cd ~/AndroidStudioProjects/LucasGGamerM/moshidon.git/"
alias gtdm="cd ~/Música/deemix\ Music/"
alias gtcf="cd ~/Projetos/codeforces"

alias p="python3"

# alias hows-my-gpu='echo "NVIDIA Dedicated Graphics" | grep "NVIDIA" && lspci -nnk | grep "NVIDIA Corporation GA107M" -A 2 | grep "Kernel driver in use" && echo "Intel Integrated Graphics" | grep "Intel" && lspci -nnk | grep "Intel.*Integrated Graphics Controller" -A 3 | grep "Kernel driver in use" && echo "Confirm which gpu libraries are in use with (active-gpu and active-gpu-prime)" && echo "Enable and disable the dedicated NVIDIA GPU with nvidia-enable and nvidia-disable"'
# alias nvidia-enable='sudo virsh nodedev-reattach pci_0000_01_00_0 && echo "GPU reattached (now host ready)" && sudo rmmod vfio_pci vfio_pci_core vfio_iommu_type1 && echo "VFIO drivers removed" && sudo modprobe -i nvidia_modeset nvidia_uvm nvidia && echo "NVIDIA drivers added" && echo "COMPLETED! (confirm success with hows-my-gpu, and active-gpu-prime)"'
# alias nvidia-disable='sudo rmmod nvidia_modeset nvidia_uvm nvidia && echo "NVIDIA drivers removed" && sudo modprobe -i vfio_pci vfio_pci_core vfio_iommu_type1 && echo "VFIO drivers added" && sudo virsh nodedev-detach pci_0000_01_00_0 && echo "GPU detached (now vfio ready)" && echo "COMPLETED! (confirm success with hows-my-gpu and active-gpu)"'
# 
# 
# alias active-gpu='glxinfo | grep vendor'
# alias active-gpu-prime='__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia glxinfo | grep vendor'
# 
# alias unigine-valley='pushd . && cd ~/Downloads/Unigine_Valley-1.0/ && __NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia ./valley && popd'

alias looking-glass='gamemoderun looking-glass-client -F -m 89'


