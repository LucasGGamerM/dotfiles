var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "title": "Uso total da CPU"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "61,174,233"
                        },
                        "/SensorLabels": {
                            "cpu/all/maximumFrequency": "Frequência",
                            "cpu/all/maximumTemperature": "Temperatura"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/maximumFrequency\",\"cpu/all/maximumTemperature\"]",
                            "totalSensors": "[\"cpu/all/usage\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.cpu",
                    "title": "Uso total da CPU"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "title": "Uso da memória"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "memory/physical/used": "61,174,233"
                        },
                        "/SensorLabels": {
                            "memory/swap/used": "Swap"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"memory/physical/free\",\"memory/swap/used\"]",
                            "totalSensors": "[\"memory/physical/usedPercent\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.memory",
                    "title": "Uso da memória"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.linechart",
                            "title": "Velocidade de rede"
                        },
                        "/SensorColors": {
                            "network/all/download": "61,174,233",
                            "network/all/upload": "233,120,61"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"network/all/download\",\"network/all/upload\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.net",
                    "title": "Velocidade de rede"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "90",
                            "popupHeight": "360",
                            "popupWidth": "360"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.mediacontroller",
                    "title": "Reprodutor de mídia"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "UserBackgroundHints": "StandardBackground",
                            "popupHeight": "450",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "fontFamily": "Noto Sans",
                            "fontWeight": "400"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.digitalclock",
                    "title": "Relógio digital"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1024x768": "Applet-132:451.421,0,592,336,0;Applet-127:851.421,336,192,304,0;Applet-128:851.421,336,192,304,0;Applet-129:835.421,336,208,304,0;Applet-131:451.421,336,592,368,0;",
                    "ItemGeometries-1280x1024": "Applet-120:400,736,880,208,0;Applet-121:896,32,352,336,0;",
                    "ItemGeometries-1280x720": "Applet-132:688,0,592,336,0;Applet-127:688,336,192,304,0;Applet-128:880,336,192,304,0;Applet-129:1072,336,208,304,0;Applet-131:688,336,592,320,0;",
                    "ItemGeometries-1280x800": "Applet-120:448,528,832,208,0;Applet-121:896,32,352,336,0;",
                    "ItemGeometries-1280x960": "Applet-120:448,688,832,208,0;Applet-121:896,32,352,336,0;",
                    "ItemGeometries-1360x768": "Applet-132:1299.33,0,592,336,0;Applet-127:1319.81,336,192,304,0;Applet-128:1501.98,336,192,304,0;Applet-129:1683.33,336,208,304,0;Applet-131:1299.33,624.435,592,368,0;",
                    "ItemGeometries-1366x768": "Applet-132:1328,0,592,336,0;Applet-127:1328,336,192,304,0;Applet-128:1520,336,192,304,0;Applet-129:1712,336,208,304,0;Applet-131:1328,640,592,368,0;",
                    "ItemGeometries-1440x900": "Applet-120:608,623.769,832,208,0;Applet-121:1056,32,352,336,0;",
                    "ItemGeometries-1536x864": "Applet-132:944,0,592,336,0;Applet-127:944,336,192,240,0;Applet-131:944,576,592,224,0;Applet-128:1136,336,192,240,0;Applet-129:1328,336,208,208,0;",
                    "ItemGeometries-1600x900": "",
                    "ItemGeometries-1670x939": "",
                    "ItemGeometries-1680x1050": "Applet-132:1088,0,592,336,0;Applet-131:1088,609,592,368,0;Applet-127:1088,328.5,192,304,0;Applet-128:1280,328.5,192,304,0;Applet-129:1472,328.5,208,304,0;",
                    "ItemGeometries-1920x1080": "Applet-132:1328,0,592,336,0;Applet-127:1328,336,192,304,0;Applet-128:1520,336,192,304,0;Applet-129:1712,336,208,304,0;Applet-131:1328,640,592,368,0;",
                    "ItemGeometries-1920x1200": "Applet-132:1328,0,592,336,0;Applet-127:1328,336,192,304,0;Applet-128:1520,336,192,304,0;Applet-129:1712,336,208,304,0;Applet-131:1328,640,592,368,0;",
                    "ItemGeometries-2194x1234": "Applet-132:1328,0,592,336,0;Applet-127:1328,336,192,304,0;Applet-128:1520,336,192,304,0;Applet-129:1712,336,208,304,0;Applet-131:1328,640,592,368,0;",
                    "ItemGeometries-2327x1309": "Applet-132:1328,0,592,336,0;Applet-127:1328,336,192,304,0;Applet-128:1520,336,192,304,0;Applet-129:1712,336,240,304,0;Applet-131:1328,640,592,368,0;",
                    "ItemGeometries-2560x1440": "Applet-132:1328,0,592,336,0;Applet-127:1328,336,192,304,0;Applet-128:1520,336,192,304,0;Applet-129:1712,336,208,304,0;Applet-131:1328,640,592,368,0;",
                    "ItemGeometries-3840x2160": "Applet-132:1328,0,592,336,0;Applet-127:1328,336,192,304,0;Applet-128:1520,336,192,304,0;Applet-129:1712,336,208,304,0;Applet-131:1328,640,592,368,0;",
                    "ItemGeometries-640x360": "Applet-132:48,0,592,288,0;Applet-127:48,-24,192,304,0;Applet-128:240,-24,192,304,0;Applet-129:432,-24,208,304,0;Applet-131:48,-80,592,368,0;",
                    "ItemGeometries-640x480": "Applet-120:240.448,344.87,640,208,0;Applet-121:576.538,32,352,336,0;",
                    "ItemGeometries-800x600": "Applet-132:383.616,0,592,336,0;Applet-127:720.896,255.053,192,288,0;Applet-128:751.002,255.053,192,288,0;Applet-129:767.616,255.053,208,288,0;Applet-131:383.616,248.755,592,352,0;",
                    "ItemGeometriesHorizontal": "Applet-132:1328,0,592,336,0;Applet-127:1328,336,192,304,0;Applet-128:1520,336,192,304,0;Applet-129:1712,336,208,304,0;Applet-131:1328,640,592,368,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "742",
                    "DialogWidth": "1071"
                },
                "/General": {
                    "arrangement": "1",
                    "iconSize": "2",
                    "labelWidth": "0",
                    "positions": "{\"1024x768\":[\"\"],\"1280x1024\":[\"\"],\"1280x720\":[\"\"],\"1360x768\":[],\"1366x768\":[\"6\",\"7\",\"desktop:/eu.betterbird.Betterbird.desktop\",\"0\",\"5\",\"desktop:/virt-manager.desktop\",\"1\",\"0\",\"desktop:/Games\",\"1\",\"5\",\"desktop:/Ardour_8.10.0.desktop\",\"2\",\"0\",\"desktop:/DaVinciResolve.desktop\",\"0\",\"6\",\"desktop:/org.signal.Signal.desktop\",\"1\",\"1\",\"desktop:/AudioVisual\",\"2\",\"1\",\"desktop:/lucasgpda\",\"0\",\"0\",\"desktop:/jetbrains-studio.desktop\",\"0\",\"2\",\"desktop:/Wacom\",\"1\",\"4\",\"desktop:/org.onlyoffice.desktopeditors.desktop\",\"1\",\"2\",\"desktop:/Android emulator.desktop\",\"5\",\"0\",\"desktop:/firefox.desktop\",\"0\",\"1\",\"desktop:/org.darktable.darktable.desktop\",\"0\",\"4\",\"desktop:/schildi.desktop\",\"3\",\"1\",\"desktop:/org.gnome.Lollypop.desktop\",\"0\",\"3\",\"desktop:/missioncenter.desktop\",\"2\",\"6\",\"desktop:/io.github.milkshiift.GoofCord.desktop\",\"1\",\"6\",\"desktop:/Musical\",\"1\",\"3\",\"desktop:/zapzap.desktop\",\"3\",\"5\"],\"1440x900\":[\"\"],\"1536x864\":[\"7\",\"8\",\"desktop:/appimagekit_dfd9c8eed7418af2139669deb6386ed0-org.prismlauncher.PrismLauncher.desktop\",\"4\",\"6\",\"desktop:/Cookie Clicker.desktop\",\"3\",\"7\",\"desktop:/heroic.desktop\",\"2\",\"4\",\"desktop:/setup-wacom-other-monitor.desktop\",\"6\",\"6\",\"desktop:/org.onlyoffice.desktopeditors.desktop\",\"0\",\"7\",\"desktop:/firefox.desktop\",\"0\",\"1\",\"desktop:/guitarix.desktop\",\"6\",\"3\",\"desktop:/virt-manager.desktop\",\"0\",\"6\",\"desktop:/schildi.desktop\",\"6\",\"1\",\"desktop:/Crab Game.desktop\",\"5\",\"7\",\"desktop:/steam.desktop\",\"2\",\"3\",\"desktop:/ES-DE.desktop\",\"3\",\"0\",\"desktop:/lucasgpda\",\"0\",\"0\",\"desktop:/Brawlhalla.desktop\",\"3\",\"3\",\"desktop:/carla.desktop\",\"2\",\"1\",\"desktop:/blackmagicraw-speedtest.desktop\",\"1\",\"4\",\"desktop:/osu-lazer.desktop\",\"5\",\"0\",\"desktop:/org.signal.Signal.desktop\",\"6\",\"2\",\"desktop:/Rocket League®.desktop\",\"5\",\"4\",\"desktop:/org.gnome.Lollypop.desktop\",\"1\",\"2\",\"desktop:/catia.desktop\",\"1\",\"7\",\"desktop:/blackmagicraw-player.desktop\",\"1\",\"6\",\"desktop:/Dark and Darker.desktop\",\"3\",\"1\",\"desktop:/Enter the Gungeon.desktop\",\"2\",\"7\",\"desktop:/missioncenter.desktop\",\"1\",\"3\",\"desktop:/Hades.desktop\",\"3\",\"4\",\"desktop:/Dota 2.desktop\",\"3\",\"5\",\"desktop:/Ardour_8.9.0.desktop\",\"0\",\"2\",\"desktop:/rakarrack-plus.desktop\",\"6\",\"4\",\"desktop:/org.mozilla.Thunderbird.desktop\",\"1\",\"1\",\"desktop:/cadence.desktop\",\"2\",\"0\",\"desktop:/Wreckfest Throw-A-Santa + Sneak Peek 2.0.desktop\",\"5\",\"3\",\"desktop:/zapzap.desktop\",\"6\",\"0\",\"desktop:/Grand Theft Auto V.desktop\",\"3\",\"2\",\"desktop:/Unturned.desktop\",\"4\",\"7\",\"desktop:/setup-wacom-draw..desktop\",\"6\",\"7\",\"desktop:/osu!stable--osu!--1726428450.43649.desktop\",\"5\",\"1\",\"desktop:/net.damonlynch.rapid_photo_downloader.desktop\",\"1\",\"0\",\"desktop:/McOsu.desktop\",\"4\",\"1\",\"desktop:/DaVinciControlPanelsSetup.desktop\",\"1\",\"5\",\"desktop:/Bilhar 3D - Pool.desktop\",\"5\",\"5\",\"desktop:/THE FINALS.desktop\",\"2\",\"6\",\"desktop:/BeamNG.drive.desktop\",\"3\",\"6\",\"desktop:/Metro Exodus Enhanced Edition.desktop\",\"4\",\"2\",\"desktop:/Counter-Strike Global Offensive.desktop\",\"2\",\"5\",\"desktop:/setup-wacom-osu.desktop\",\"6\",\"5\",\"desktop:/Wreckfest.desktop\",\"5\",\"2\",\"desktop:/jetbrains-studio.desktop\",\"0\",\"3\",\"desktop:/Overwatch 2.desktop\",\"4\",\"3\",\"desktop:/Pegasus.desktop\",\"4\",\"4\",\"desktop:/opentabletdriver.desktop\",\"2\",\"2\",\"desktop:/Hotshot Racing.desktop\",\"4\",\"0\",\"desktop:/DaVinciResolve.desktop\",\"0\",\"4\",\"desktop:/sober.desktop\",\"5\",\"6\",\"desktop:/org.darktable.darktable.desktop\",\"0\",\"5\",\"desktop:/Portal 2.desktop\",\"4\",\"5\"],\"1600x900\":[\"8\",\"8\",\"desktop:/Dota 2.desktop\",\"2\",\"4\",\"desktop:/Grand Theft Auto V.desktop\",\"3\",\"1\",\"desktop:/carla.desktop\",\"1\",\"2\",\"desktop:/Enter the Gungeon.desktop\",\"2\",\"5\",\"desktop:/org.mozilla.Thunderbird.desktop\",\"6\",\"4\",\"desktop:/org.gnome.Lollypop.desktop\",\"3\",\"6\",\"desktop:/setup-wacom-draw..desktop\",\"5\",\"5\",\"desktop:/steam.desktop\",\"6\",\"2\",\"desktop:/blackmagicraw-speedtest.desktop\",\"0\",\"7\",\"desktop:/Wreckfest Throw-A-Santa + Sneak Peek 2.0.desktop\",\"6\",\"7\",\"desktop:/rakarrack-plus.desktop\",\"5\",\"1\",\"desktop:/org.darktable.darktable.desktop\",\"0\",\"5\",\"desktop:/Brawlhalla.desktop\",\"1\",\"0\",\"desktop:/firefox.desktop\",\"0\",\"1\",\"desktop:/schildi.desktop\",\"5\",\"4\",\"desktop:/org.signal.Signal.desktop\",\"6\",\"0\",\"desktop:/DaVinciControlPanelsSetup.desktop\",\"2\",\"2\",\"desktop:/blackmagicraw-player.desktop\",\"0\",\"6\",\"desktop:/osu!stable--osu!--1726428450.43649.desktop\",\"4\",\"4\",\"desktop:/org.onlyoffice.desktopeditors.desktop\",\"4\",\"1\",\"desktop:/ES-DE.desktop\",\"2\",\"6\",\"desktop:/guitarix.desktop\",\"3\",\"2\",\"desktop:/Crab Game.desktop\",\"1\",\"7\",\"desktop:/Portal 2.desktop\",\"4\",\"7\",\"desktop:/Unturned.desktop\",\"6\",\"5\",\"desktop:/Dark and Darker.desktop\",\"2\",\"0\",\"desktop:/jetbrains-studio.desktop\",\"0\",\"2\",\"desktop:/setup-wacom-osu.desktop\",\"5\",\"6\",\"desktop:/DaVinciResolve.desktop\",\"0\",\"4\",\"desktop:/net.damonlynch.rapid_photo_downloader.desktop\",\"5\",\"2\",\"desktop:/catia.desktop\",\"1\",\"3\",\"desktop:/Rocket League®.desktop\",\"5\",\"3\",\"desktop:/setup-wacom-other-monitor.desktop\",\"5\",\"7\",\"desktop:/Counter-Strike Global Offensive.desktop\",\"1\",\"6\",\"desktop:/McOsu.desktop\",\"3\",\"7\",\"desktop:/Hades.desktop\",\"3\",\"3\",\"desktop:/opentabletdriver.desktop\",\"4\",\"2\",\"desktop:/lucasgpda\",\"0\",\"0\",\"desktop:/appimagekit_dfd9c8eed7418af2139669deb6386ed0-org.prismlauncher.PrismLauncher.desktop\",\"5\",\"0\",\"desktop:/osu-lazer.desktop\",\"4\",\"3\",\"desktop:/Overwatch 2.desktop\",\"4\",\"5\",\"desktop:/Wreckfest.desktop\",\"6\",\"6\",\"desktop:/zapzap.desktop\",\"7\",\"0\",\"desktop:/virt-manager.desktop\",\"3\",\"0\",\"desktop:/BeamNG.drive.desktop\",\"2\",\"7\",\"desktop:/Cookie Clicker.desktop\",\"1\",\"5\",\"desktop:/THE FINALS.desktop\",\"6\",\"3\",\"desktop:/sober.desktop\",\"6\",\"1\",\"desktop:/Hotshot Racing.desktop\",\"3\",\"5\",\"desktop:/heroic.desktop\",\"3\",\"4\",\"desktop:/cadence.desktop\",\"1\",\"1\",\"desktop:/Metro Exodus Enhanced Edition.desktop\",\"4\",\"0\",\"desktop:/missioncenter.desktop\",\"1\",\"4\",\"desktop:/Pegasus.desktop\",\"4\",\"6\",\"desktop:/Bilhar 3D - Pool.desktop\",\"2\",\"3\",\"desktop:/Android emulator.desktop\",\"2\",\"1\",\"desktop:/Ardour_8.9.0.desktop\",\"0\",\"3\"],\"1670x939\":[\"7\",\"9\",\"desktop:/Portal 2.desktop\",\"4\",\"2\",\"desktop:/Metro Exodus Enhanced Edition.desktop\",\"3\",\"4\",\"desktop:/Enter the Gungeon.desktop\",\"2\",\"2\",\"desktop:/Wreckfest Throw-A-Santa + Sneak Peek 2.0.desktop\",\"6\",\"0\",\"desktop:/Brawlhalla.desktop\",\"0\",\"7\",\"desktop:/jetbrains-studio.desktop\",\"0\",\"1\",\"desktop:/blackmagicraw-speedtest.desktop\",\"0\",\"6\",\"desktop:/org.mozilla.Thunderbird.desktop\",\"5\",\"6\",\"desktop:/heroic.desktop\",\"3\",\"0\",\"desktop:/lucasgpda\",\"0\",\"0\",\"desktop:/Dota 2.desktop\",\"2\",\"1\",\"desktop:/Grand Theft Auto V.desktop\",\"2\",\"6\",\"desktop:/steam.desktop\",\"5\",\"4\",\"desktop:/setup-wacom-draw..desktop\",\"5\",\"2\",\"desktop:/DaVinciControlPanelsSetup.desktop\",\"1\",\"8\",\"desktop:/Cookie Clicker.desktop\",\"1\",\"3\",\"desktop:/rakarrack-plus.desktop\",\"4\",\"4\",\"desktop:/THE FINALS.desktop\",\"5\",\"5\",\"desktop:/org.signal.Signal.desktop\",\"4\",\"8\",\"desktop:/catia.desktop\",\"1\",\"1\",\"desktop:/Dark and Darker.desktop\",\"1\",\"6\",\"desktop:/Crab Game.desktop\",\"1\",\"5\",\"desktop:/guitarix.desktop\",\"2\",\"7\",\"desktop:/virt-manager.desktop\",\"2\",\"5\",\"desktop:/missioncenter.desktop\",\"1\",\"2\",\"desktop:/Hotshot Racing.desktop\",\"3\",\"1\",\"desktop:/org.gnome.Lollypop.desktop\",\"3\",\"2\",\"desktop:/Unturned.desktop\",\"5\",\"7\",\"desktop:/Ardour_8.9.0.desktop\",\"0\",\"2\",\"desktop:/carla.desktop\",\"1\",\"0\",\"desktop:/org.darktable.darktable.desktop\",\"1\",\"7\",\"desktop:/schildi.desktop\",\"4\",\"7\",\"desktop:/sober.desktop\",\"5\",\"3\",\"desktop:/Hades.desktop\",\"2\",\"8\",\"desktop:/appimagekit_dfd9c8eed7418af2139669deb6386ed0-org.prismlauncher.PrismLauncher.desktop\",\"4\",\"3\",\"desktop:/zapzap.desktop\",\"6\",\"1\",\"desktop:/net.damonlynch.rapid_photo_downloader.desktop\",\"4\",\"5\",\"desktop:/cadence.desktop\",\"0\",\"8\",\"desktop:/opentabletdriver.desktop\",\"3\",\"6\",\"desktop:/Counter-Strike Global Offensive.desktop\",\"1\",\"4\",\"desktop:/setup-wacom-osu.desktop\",\"5\",\"0\",\"desktop:/firefox.desktop\",\"2\",\"4\",\"desktop:/McOsu.desktop\",\"3\",\"3\",\"desktop:/osu-lazer.desktop\",\"3\",\"7\",\"desktop:/ES-DE.desktop\",\"2\",\"3\",\"desktop:/Rocket League®.desktop\",\"4\",\"6\",\"desktop:/Wreckfest.desktop\",\"5\",\"8\",\"desktop:/BeamNG.drive.desktop\",\"0\",\"3\",\"desktop:/osu!stable--osu!--1726428450.43649.desktop\",\"3\",\"8\",\"desktop:/Overwatch 2.desktop\",\"4\",\"0\",\"desktop:/DaVinciResolve.desktop\",\"2\",\"0\",\"desktop:/org.onlyoffice.desktopeditors.desktop\",\"3\",\"5\",\"desktop:/Bilhar 3D - Pool.desktop\",\"0\",\"4\",\"desktop:/setup-wacom-other-monitor.desktop\",\"5\",\"1\",\"desktop:/blackmagicraw-player.desktop\",\"0\",\"5\",\"desktop:/Pegasus.desktop\",\"4\",\"1\"],\"1745x982\":[\"\"],\"1920x1080\":[\"5\",\"10\",\"desktop:/it.mijorus.gearlever.desktop\",\"1\",\"6\",\"desktop:/signalbox-signal-desktop.desktop\",\"3\",\"9\",\"desktop:/chat.schildi.desktop.desktop\",\"3\",\"8\",\"desktop:/lucasgpda\",\"0\",\"0\",\"desktop:/me.kozec.syncthingtk.desktop\",\"4\",\"1\",\"desktop:/Ardour_8.12.0.desktop\",\"0\",\"3\",\"desktop:/one.ablaze.floorp.desktop\",\"1\",\"5\",\"desktop:/prism_launcher.desktop\",\"3\",\"1\",\"desktop:/net.damonlynch.rapid_photo_downloader.desktop\",\"3\",\"4\",\"desktop:/missioncenter.desktop\",\"0\",\"6\",\"desktop:/opentabletdriver.desktop\",\"2\",\"8\",\"desktop:/Android emulator.desktop\",\"0\",\"1\",\"desktop:/steam.desktop\",\"4\",\"0\",\"desktop:/org.nicotine_plus.Nicotine.desktop\",\"2\",\"5\",\"desktop:/ubuntu-obs-com.obsproject.Studio.desktop\",\"2\",\"6\",\"desktop:/com.ranfdev.DistroShelf.desktop\",\"1\",\"2\",\"desktop:/com.discordapp.Discord.desktop\",\"1\",\"1\",\"desktop:/virt-manager.desktop\",\"1\",\"7\",\"desktop:/jetbrains-studio.desktop\",\"0\",\"2\",\"desktop:/net.lutris.Lutris.desktop\",\"2\",\"4\",\"desktop:/org.keepassxc.KeePassXC.desktop\",\"2\",\"0\",\"desktop:/org.darktable.darktable.desktop\",\"0\",\"9\",\"desktop:/btrfs-assistant.desktop\",\"4\",\"5\",\"desktop:/sh.ppy.osu.desktop\",\"2\",\"9\",\"desktop:/org.gnome.Lollypop.desktop\",\"2\",\"3\",\"desktop:/io.github.mpobaschnig.Vaults.desktop\",\"4\",\"2\",\"desktop:/wire.desktop\",\"4\",\"3\",\"desktop:/org.rncbc.qpwgraph.desktop\",\"3\",\"3\",\"desktop:/firefox.desktop\",\"1\",\"3\",\"desktop:/org.onlyoffice.desktopeditors.desktop\",\"2\",\"7\",\"desktop:/net.retrodeck.retrodeck.desktop\",\"3\",\"6\",\"desktop:/org.gnome.World.PikaBackup.desktop\",\"3\",\"0\",\"desktop:/eu.betterbird.Betterbird.desktop\",\"0\",\"8\",\"desktop:/com.github.tchx84.Flatseal.desktop\",\"1\",\"4\",\"desktop:/com.blackmagicdesign.resolve.desktop\",\"1\",\"0\",\"desktop:/chromium-browser.desktop\",\"0\",\"7\",\"desktop:/guitarix.desktop\",\"1\",\"8\",\"desktop:/net.retrodeck.retrodeck.Configurator.desktop\",\"3\",\"7\",\"desktop:/kitty.desktop\",\"2\",\"1\",\"desktop:/zapzap.desktop\",\"4\",\"4\",\"desktop:/org.qbittorrent.qBittorrent.desktop\",\"3\",\"2\",\"desktop:/org.localsend.localsend_app.desktop\",\"2\",\"2\",\"desktop:/catia.desktop\",\"0\",\"5\",\"desktop:/heroic_games_launcher.desktop\",\"1\",\"9\",\"desktop:/vlc.desktop\",\"3\",\"5\",\"desktop:/com.usebottles.bottles.desktop\",\"0\",\"4\"],\"1920x1200\":[\"\"],\"2327x1309\":[],\"640x480\":[\"\"]}",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/lucasgpda/Imagens/Cyberpunk 2077/photomode_30042025_143603.png",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1024x768": "",
                    "ItemGeometries-1080x1920": "",
                    "ItemGeometries-1280x1024": "",
                    "ItemGeometries-1280x720": "",
                    "ItemGeometries-1280x800": "",
                    "ItemGeometries-1280x960": "",
                    "ItemGeometries-1440x900": "",
                    "ItemGeometries-1536x864": "",
                    "ItemGeometries-1600x900": "",
                    "ItemGeometries-1670x939": "",
                    "ItemGeometries-1745x982": "",
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometries-1920x1200": "",
                    "ItemGeometries-2194x1234": "",
                    "ItemGeometries-2327x1309": "",
                    "ItemGeometries-960x540": "",
                    "ItemGeometriesHorizontal": "",
                    "ItemGeometriesVertical": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "positions": "{\"1024x768\":[],\"1920x1080\":[],\"2327x1309\":[],\"960x540\":[]}"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/lucasgpda/Imagens/Cyberpunk 2077/photomode_30042025_143603.png",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1536x864": "",
                    "ItemGeometries-1600x900": "",
                    "ItemGeometries-1670x939": "",
                    "ItemGeometries-1745x982": "",
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometries-2327x1309": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                },
                "/General": {
                    "positions": "{\"1920x1080\":[],\"2327x1309\":[]}"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/lucasgpda/Imagens/Cyberpunk 2077/photomode_30042025_143603.png",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "3",
                    "wallpaperplugin": "org.kde.image"
                },
                "/General": {
                    "positions": "{\"1920x1080\":[]}"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/lucasgpda/Imagens/Cyberpunk 2077/photomode_30042025_143603.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "508",
                            "popupWidth": "647"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "fedora-logo-icon",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "launchers": "applications:org.mozilla.firefox.desktop,preferred://filemanager,applications:kitty.desktop,applications:org.gnome.Lollypop.desktop,applications:systemsettings.desktop,applications:org.kde.discover.desktop",
                            "showOnlyCurrentDesktop": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "450",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "fontWeight": "400"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "510",
                            "popupWidth": "647"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "fedora-logo-icon",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "launchers": "applications:org.mozilla.firefox.desktop,preferred://filemanager,applications:org.kde.konsole.desktop,file:///home/lucasgpda/.local/share/flatpak/exports/share/applications/org.gnome.Lollypop.desktop,applications:systemsettings.desktop,applications:org.kde.discover.desktop",
                            "showOnlyCurrentDesktop": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "70",
                            "popupHeight": "450",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "fontWeight": "400"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "516",
                            "popupWidth": "655"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "fedora-logo-icon",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "launchers": "applications:org.mozilla.firefox.desktop,preferred://filemanager,applications:kitty.desktop,applications:systemsettings.desktop,applications:org.gnome.Lollypop.desktop,applications:org.kde.discover.desktop",
                            "showOnlyCurrentDesktop": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "PreloadWeight": "100",
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "showTitle": "false",
                            "updateRateLimit": "10000"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/FaceGrid/Appearance": {
                            "chartFace": "org.kde.ksysguard.linechart",
                            "showTitle": "false"
                        },
                        "/Sensors": {
                            "totalSensors": "[\"power/1613/chargeRate\"]"
                        },
                        "/org.kde.ksysguard.piechart/General": {
                            "rangeAuto": "false",
                            "showLegend": "false",
                            "smoothEnds": "false"
                        },
                        "/org.kde.ksysguard.textonly/General": {
                            "groupByTotal": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "454",
                            "popupWidth": "564"
                        },
                        "/Appearance": {
                            "fontWeight": "400"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.3333333333333335,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
