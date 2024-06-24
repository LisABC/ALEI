/** This function is invoked whenever someone clicks on the the paramer input field, 
 *  wanting to edit the value of a property in the GUI.
 *  Changing the region's name, trigger action type, timer delay etc. 
 * 
 *  This function is responsible for displaying the input field / dropmenu whenever
 *  someone wants to edit the parameter value.
 * 
 *  This function handles 2 cases.
 *  - CASE 1: No dropdown menu required. This is for parameter types like value.
 *  - CASE 2: Dropdown menu required. This is for parameter types like trigger-type.
 * 
 * @param {*} obj               Refers to the input field, the HTML element that got clicked. Eg: <span class="pa2 p_u2" ...>
 * @param {string} enablemode   Refers to the parameter type (timer+none). Note that the enablemode may not be the same as what appears
 *                              in obj due to StreetMagic().
 */
function letedit(obj, enablemode) {

    // ff refers to the green HTML element that represents the input field. (case 1)
    ff.style.display = 'none';

    // ff_drop refers to the HTML element representing the whole dropbox menu. (case 2)
    ff_drop.style.display = 'none';

    // - not used -
    if (enablemode == 'nochange') {
        return;
    }

    // Get info of the input field's bounding box. To be used to style the respective ff or ff_drop elements.
    var rect = obj.getBoundingClientRect();

    // Setting global variables, to be used for setletedit.
    letediting_mode = enablemode;
    lettarget = obj;
    letediting = true;

    // -------------------------------------------------------------
    // CASE 1.
    if (!lapa(enablemode)) {
        // Style the drop in accords to the size of the input field.
        ff.style.left = rect.left + 'px';
        ff.style.top = rect.top + 'px';
        ff.style.width = rect.width + 'px';
        ff.style.height = rect.height + 'px';
        ff.className = 'pa2edit ' + obj.className;
        ff.style.backgroundColor = '#4a7372';
        ff.style.borderColor = '#608b6f';

        // Get the value of parameter.
        var strinput = obj.innerHTML;        

        if (strinput == '<nochange>...</nochange>')
            ff.value = '[leave as is]';
        else if (strinput == '&nbsp;')
            ff.value = '';
        else
            ff.value = strinput.split('&amp;').join('&');


        ff.style.display = 'block';
        if (!let_focused)
            ff.focus();

    // -------------------------------------------------------------
    // Case 2.
    } else {
        var post_set_html_callback = null;

        // Add drop down width based on property type
        var addonw = 0;
        switch (enablemode) {
        case 'char':
            addonw = 60;
            break;
        case 'trigger_type':
            addonw = 450;
            break;
        case 'sound':
            addonw = 150;
            break;
        }

        // Display the drop down menu.
        ff_drop.style.display = 'inline-block';
        ff_drop.style.left = (rect.left - addonw) + 'px';
        ff_drop.style.top = (rect.top + rect.height) + 'px';
        ff_drop.style.width = (rect.width + addonw) + 'px';

        // paramsout represent the final html to represent the input field or dropdown menu.
        var paramsout = '';
        
        // Get the value in the parameter. Eg: gun_rifle, 42, hero1_guns 
        // Value is encapsulated in a element called <pvalue real="???">???'s name</pvalue> as obj's innerhtml.
        var active_param = lgprv(obj);

        // Set global params
        quick_pick = false;
        quick_pick_ignore_one_click = false;
        lqpc = new Array();
        quick_pick_active_param = '';

        var he = 8;

        // Iterate through all the possible values for that parameter type and retrieve all possible values.
        for (i in special_values_table[enablemode]) {
            // Parameter type is not a list of defined values but rather ascends numerically.
            // Example: trigger (trigger*1, trigger*2)
            if (i == '[listof]' || i == '[listof2]') {
                lqpc.push(special_values_table[enablemode][i]);

                quick_pick = true;
                quick_pick_ignore_one_click = true;
                quick_pick_active_param = active_param;
                quick_pick_fake_over = -1;
                need_redraw = true;

                for (i2 = 0; i2 < es.length; i2++)
                    if (es[i2].exists)
                        if (es[i2]._class == special_values_table[enablemode][i]) {
                            he += 22;
                            paramsout += '<a href="#" onClick="setletedit(\'' + es[i2].pm.uid + '\', \'' + lcrpl(es[i2].pm.uid, "'", "\\'") + '\', \'' + active_param + '\')" onMouseOver="quick_pick_fake_over=' + i2 + ';" onMouseOut="quick_pick_fake_over=-1;" class="' + (active_param == es[i2].pm.uid ? 'paramactive' : 'paraminbox') + ' paramwide">' + lrp(i2) + '</a>';
                        }
            } 
            // Parameter type is of a defined value.
            else {
                he += 22;
                paramsout += `\
                <a href="#" onClick="setletedit('${i}', '${lcrpl(special_values_table[enablemode][i], "'", "\\'")}', '${active_param}')"\
                class="${active_param == i ? 'paramactive' : 'paraminbox'} paramwide"> ${special_values_table[enablemode][i]}</a>\
                `;
            }
        }

        he = Math.max(20, Math.min(he, 500));
        if ((rect.top + rect.height) + he > window.innerHeight) {
            he = window.innerHeight - (rect.top + rect.height);
        }

        // The trigger_type dropdown menu has it's own unique styling and features.
        if (enablemode == 'trigger_type') {
            addonw = 700;
            ff_drop.style.top = '0px';
            he = window.innerHeight;
            ff_drop.style.left = (rect.left - addonw) + 'px';
            ff_drop.style.width = (addonw) + 'px';

            // Displaying the filters at the top.
            var group_code = '<div style="background-color:#000000;display:block;width:' + (addonw - 32) + 'px;">';
            group_code += '<a onclick="MaskTriggerActions(\'\', \'\')" href="#" style="display:inline-block;padding:4px;padding-left:7px;padding-right:7px;color:' + tr_type_tags[i] + '" class="paraminbox">Everything</a>';
            for (i in tr_type_tags) {
                group_code += '<a onclick="MaskTriggerActions(\'' + tr_type_tags[i] + '\',\'' + i + '\')" href="#" style="display:inline-block;padding:4px;padding-left:7px;padding-right:7px;color:' + tr_type_tags[i] + '" class="paraminbox">' + i + '</a>';
            }      
            group_code += '<a onclick="setletedit(\'-1\', \'Do nothing\', \'0\')" href="#" style="display:inline-block;padding:4px;padding-left:7px;padding-right:7px;color:' + tr_type_tags[i] + '" class="paraminbox">Do Nothing</a>';
            group_code += '</div>';

            // Display the input field.
            group_code += '<div style="background-color:#000000;display:block;width:' + (addonw - 32) + 'px;">';
            group_code += '<input type="text" id="trigger_search_bar" class="field_input" style="width:100%" onKeyUp="MaskTriggerActions(\'QUICK_SEARCH\',this.value)">';
            group_code += '</div>';
            paramsout = group_code + paramsout;

            // Focus on the search bar.
            post_set_html_callback = function() {
                document.getElementById('trigger_search_bar').focus();
            };
        }

        // Empty list of possible values. Missing triggers / doors / etc..
        if (paramsout == '') {
            paramsout += '<span style="color:#888">';
            switch (Math.floor(Math.random() * 11)) {
            case 0:
                paramsout += 'Where had you put ' + special_values_table[enablemode]['[listof]'] + '?';
                break;
            case 1:
                paramsout += 'Not enough ' + special_values_table[enablemode]['[listof]'] + 's.';
                break;
            case 2:
                paramsout += 'You need more ' + special_values_table[enablemode]['[listof]'] + 's.';
                break;
            case 3:
                paramsout += 'Guess who\'s not going to create itself? - ' + special_values_table[enablemode]['[listof]'] + 's.';
                break;
            case 4:
                paramsout += 'Create at least one ' + special_values_table[enablemode]['[listof]'] + ' first.';
                break;
            case 5:
                paramsout += 'I don\'t see any ' + special_values_table[enablemode]['[listof]'] + 's.';
                break;
            case 6:
                paramsout += 'Missed something? Maybe ' + special_values_table[enablemode]['[listof]'] + 's?';
                break;
            case 7:
                paramsout += 'Would you like to make any ' + special_values_table[enablemode]['[listof]'] + '?';
                break;
            case 8:
                paramsout += 'No ' + special_values_table[enablemode]['[listof]'] + 's - no drop-down list.';
                break;
            case 9:
                paramsout += 'What you want to select? Some ' + special_values_table[enablemode]['[listof]'] + '? But you don\'t have any ' + special_values_table[enablemode]['[listof]'] + 's on this map.';
                break;
            default:
                paramsout += 'Where all the ' + special_values_table[enablemode]['[listof]'] + 's gone?';
                break;
            }
            paramsout += '</span>';
            he += 30;
        }

        ff_drop.style.height = he + 'px';
        ff_drop.innerHTML = paramsout;
        ff_drop.focus();

        if (enablemode == 'bg_model' || enablemode == 'decor_model') {
            ff_drop.innerHTML = '';
            ff.style.display = 'none';
            BrowseImages(enablemode, active_param, function(new_value, new_value_title) {
                setletedit(new_value, new_value_title, active_param);
            });
        }

        if (post_set_html_callback !== null){
            post_set_html_callback(ff_drop);
        }
    }

    // Rounds, cleans and sanitises input.
    stopedit(null);
}