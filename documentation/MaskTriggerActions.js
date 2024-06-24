/**
 *  This function filters the dropdown menu for trigger list.
 *  Only change made is to replace childNodes with children
 * 
 *  @param {string} hex             Colour of the text
 *  @param {string} extra_mentions  The category of trigger actions
 */
function MaskTriggerActions(hex, extra_mentions) {
    var extra_word = extra_mentions;
    if (hex == 'QUICK_SEARCH')
        extra_word = extra_word.toLowerCase();
    else
        extra_word = ' ' + extra_word.toLowerCase();

    for (var i = 0; i < ff_drop.children.length; i++) {
        var html = ff_drop.children[i].innerHTML;
        
        if (hex != '' && html.indexOf(hex) == -1 && html.toLowerCase().indexOf(extra_word) == -1 && html.indexOf('Do nothing') == -1) {
            ff_drop.children[i].style.display = 'none';
        } else {
            ff_drop.children[i].style.display = 'inline-block';
        }
    }
}