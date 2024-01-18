# ALE Improvements
ALEI Icon (cc: broforce1, remade by Prosu)

![ALEI Icon](/icon.png "ALEI Icon")

Script that patches ALE for the better. The goal is to make ALE more usable to map makers.
Discord server: https://discord.gg/K5jcNEvZ85

## Change History
- Makes right panel, inputs bit wider and also adds in skins that exist in-game but not in ALE. (v0.1)
- Added sounds that exist in-game but not in ALE. (v0.2), cc: Prosu
- Renames those new sounds to names that are more friendly (e.x: `xin_hit` -> `Xin - Hurt`) (v0.5), cc: Longbow Mangudai
- Edits original stylesheet in-place, so right panel edits should work on all themes. (v0.5), thanks to Xeden and Longbow Mangudai for reporting the issue
- Forces VSync (v0.6), cc: Prosu
- Shows 3 properties that movables have but ALE does not show. (v1.0)
- Added veh_hh to vehicle list. (v1.0), I do not know what you'd use this for, but I will add it just incase anyway
- Added missing voice presets. (v1.1), cc: Prosu
- Added NARL and Hakase decor (v1.5)
- Allows permamently changing stars image instead of constantly pasting script in console (v1.9)
- Couple of trigger renames. (v2.0), thanks nightmar for reporting some.
- Redirects old manual to [EaglePB2's Manual](https://eaglepb2.gitbook.io/pb2-editor-manual/) (v2.3)
- Adds "Download XML" button. (v2.4)
- Caches image lists, this should allow for faster decor/bg picking. (v2.5)
- Adds new skins, voices and voice presets that appeared in 2/11/23(DD/MM/YY). (v2.6)
- Synchronizes clipboard between ALE tabs. (v2.9), impl: Prosu, suggested: Xeden
- Adds 3 skins that appeared in 11/11/23. (v3.1), cc: Xeden
- Adds resizing of the property panel. (v3.2), cc: Prosu
- Makes right panel take all the space when object list is hidden. (v3.3)
- Adds more snapping options. (v3.5)
- Allows putting spaces in action parameters. (v3.6)
- Allows pasting XML directly. (v3.7), impl: noname
- Fixes issue where you are unable to rename decor if it had " in the name. (v3.8)
- Ctrl + F(Find object) and Ctrl + S(Save) keybinds. (v4.0), impl: noname
- Can now download XML of selected objects only. (v4.3)
- Allows for multiple decor/bg uploads. (v4.4)
- Allows for resizing object list. (First implemented in v4.9, completed in v5.0), cc: Casey
- Shows same parameters. (v5.3), cc: Xeden, impl: Noname, modified: mici1234
- Fixes snapping issues. (v5.4), impl: Prosu, cc: Shadowsyn
- Patches map loading vulnerabilities like one mentioned in [message link in ALEI discord server](https://discord.com/channels/1169664640465240154/1169667400376004764/1187082888202690671) (v5.7, fully implemented in  v5.8), cc: Prosu & GCP5o
- Makes requests asynchronous. (v6.5)
- Opt-in automatic re-references when object gets renamed. (started in v7.3, completed in v7.4), cc: Nightmare
- Opt-in display in-game ID of objects. (v8.0)
- Added menu for ALEI-related settings (v8.2)
- Made negative teams more descriptive about what they do, and made negative teams appear in gun team selection (v8.5), cc: TheRealOne, Silk1
- v9.0 updates: (impl: Nonamne):
  - All things in triggers that have < and > will be converted to &lt; and &gt; respectively when saving the map
  - When you create any object, the number after * is guaranteed to BE IN ORDER
  - Some zoom utilies:
    - If canvas is focused, and you click Ctrl +, it will zoom in
    - If canvas is focused, and you click Ctrl -, it will zoom out
    - If canvas is focused, and you click Ctrl Alt, it will reset the zoom
  - clicking R on any selected will "rotate" it ? Still waiting from noname about what that is supposed to be doing

## How to install ?
It's recommended to use [tampermonkey](https://www.tampermonkey.net/) as that gives you benefit of auto updating. Once you download tampermonkey, you can click [here](https://github.com/ZenoABC/ALEI/raw/main/alei.user.js), then tampermonkey will ask you whether to install or not, just click "install".

You can also copy the script itself and paste in JS console & execute manually.

**NOTE:** Tampermonkey is the only natively supported userscript manager, you might have issues if you use others (Such as GreaseMonkey).
