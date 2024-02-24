# Insertions
This part includes changes that was done because game has it but ALE doesnt.
- Added skins.
- Added missing sounds.
- Added 3 properties of movables.
- Added "Hand Holder" to vehicle list.
- Added missing voice presets.
- Added NARL weapon and Hakase decor.
- Projectile models.

# Features
This part includes changes to adds new things to ALE.
- Makes right panel resizable
- Makes object list resizable
- Adds more snapping options and properly aligns objects to grid.
- Forces VSync
- Find(Ctrl + F) and Save(Ctrl + S) keybinds.
- Allows for downloading whole map or just selected objects as xml
- Allows for multiple custom image uploads.
- Allows for inserting XML.
- Caches custom images, allowing for faster loading
- Shows parameter values if all selected objects have it same.
- Allows putting spaces, <, > and " in trigger values.
- Makes server requests asynchronous, allowing for smoother experience.
- Opt-in automatic re-references for object UIDs when they are renamed.
- Opt-in displaying object's in-game ID.
- Synchronizes clipboards between tabs.
- Canvas utilities:
  - Ctrl + to zoom in
  - Ctrl - to zoom out
  - Ctrl Alt to reset zoom
- Clicking R will rotate objects.
- Makes number after * in object UID be guaranteed in order.
- Made negative teams appear in gun team list.
- PB3's LE inspired dark theme. (By poll)
- Arbitrary snappings
- Trigger code replacement (Ctrl+H)
- Automatic skin addition even if they are not published to game.
- Small "script language" to act on parameter for multiple objects at once. [More detail here](/alescript.md)
- Ability to manually clear backups
- Object clipboard. (Ctrl+P selected objects to save into clipboard, get out of focus and Ctrl+P to open object clipboard list)

# Fixes
This part includes changes that are meant to fix issues (It doesn't have to be code issue, it can be any issue, ambiguity issues, etc.)
- Patches map loading vulnerability. [Detail is in ALEI server](https://discord.com/channels/1169664640465240154/1169667400376004764/1187082888202690671)
- Fixes issue where you cannot rename/delete a decor if it has " in the name.

# Replacements
This part includes changes that just rename, redirect things
- Redirects old manual to [EaglePB2's Manual](https://eaglepb2.gitbook.io/pb2-editor-manual/)
- Made negative teams more descriptive about what they do.
