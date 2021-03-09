function pm_change_search_field(e){var r={action:"pm_advance_search_get_search_fields_by_gid",gid:e,match_fields:" "};jQuery.post(pm_ajax_object.ajax_url,r,function(e){e&&(jQuery("#advance_seach_ul").empty(),jQuery("#advance_seach_ul").append(e),pm_advance_user_search(""))})}function pm_remove_attachment(e,r,t){var i;jQuery("#pm-edit-group-popup, .pm-popup-mask, .pg-blog-dialog-mask").toggle(),(i=jQuery)("#pg-remove-attachment-dialog").dialog({resizable:!1,height:"auto",width:400,modal:!0,buttons:{Yes:function(){var n={action:"pm_remove_attachment",key:r,value:t};i.post(pm_ajax_object.ajax_url,n,function(r){r&&i(e).parent("a").parent("span.pm_frontend_attachment").remove()}),i(this).dialog("close")},No:function(){i(this).dialog("close")}}})}function pm_expand_all_conent(){jQuery("#pm-accordion .pm-accordian-content").show()}function pm_collapse_all_conent(){jQuery("#pm-accordion .pm-accordian-content").hide()}function pm_show_hide(e,r,t,i){a=jQuery(e).is(":checked"),1==a?(jQuery("#"+r).show(500),""!=t&&jQuery("#"+t).hide(500),""!=i&&jQuery("#"+i).hide(500)):(jQuery("#"+r).hide(500),""!=t&&jQuery("#"+t).show(500),""!=i&&jQuery("#"+i).show(500))}function pm_add_repeat(e){a=jQuery(e).parent("a").parent("div.pm_repeat").clone(),jQuery(a).children("input").val(""),jQuery(e).parent("a").parent("div.pm_repeat").parent("div.pm-field-input").append(a)}function pm_remove_repeat(e){jQuery(e).parent("a").parent("div.pm_repeat").remove()}function validate_phone_number2(e){jQuery.isNumeric(e);var r=e.replace(/[^\d]/g,"");return""==e||!(r.length<10||r.length>13)}function validate_phone_number(e){if(""!=e){var r=e.replace(/[^\d]/g,""),t=e;r=e.replace(/[^\d]/g,"");return!!(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(t)&&r.length>=10&&r.length<=13)}return!0}function validate_facebook_url(e){return""==e||!!/(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*?(\/)?([\w\-\.]*)/i.test(e)}function validate_twitter_url(e){return""==e||!!/(ftp|http|https):\/\/?((www|\w\w)\.)?twitter.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(e)}function validate_google_url(e){return""==e||!!/((http:\/\/(plus\.google\.com\/.*|www\.google\.com\/profiles\/.*|google\.com\/profiles\/.*))|(https:\/\/(plus\.google\.com\/.*)))/i.test(e)}function validate_linked_in_url(e){return""==e||!!/(ftp|http|https):\/\/?((www|\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(e)}function validate_youtube_url(e){return""==e||!!/(ftp|http|https):\/\/?((www|\w\w)\.)?youtube.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(e)}function validate_soundcloud_url(e){return""==e||!!/(ftp|http|https):\/\/?((www|\w\w)\.)?soundcloud.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(e)}function validate_mixcloud_url(e){return""==e||!!/(ftp|http|https):\/\/?((www|\w\w)\.)?mixcloud.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(e)}function validate_instagram_url(e){if(""!=e){return!!e.match(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/)}return!0}function profile_magic_frontend_validation(e){var r=e.id,t=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;jQuery(".errortext").html(""),jQuery(".errortext").hide(),jQuery(".all_errors").html(""),jQuery(".warning").removeClass("warning"),jQuery("#"+r+" .pm_email").each(function(e,r){var i=jQuery(this).children("input").val();0==t.test(i)&&""!=i&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_email),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_number").each(function(e,r){var t=jQuery(this).children("input").val();0==jQuery.isNumeric(t)&&""!=t&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_number),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_phone_number").each(function(e,r){validate_phone_number(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_phone_number),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_mobile_number").each(function(e,r){validate_phone_number(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_mobile_number),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_facebook_url").each(function(e,r){validate_facebook_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_facebook_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_twitter_url").each(function(e,r){validate_twitter_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_twitter_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_google_url").each(function(e,r){validate_google_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_google_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_linked_in_url").each(function(e,r){validate_linked_in_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_linked_in_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_youtube_url").each(function(e,r){validate_youtube_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_youtube_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_mixcloud_url").each(function(e,r){validate_mixcloud_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_mixcloud_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_soundcloud_url").each(function(e,r){validate_soundcloud_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_soundcloud_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_instagram_url").each(function(e,r){validate_instagram_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_instagram_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_datepicker").each(function(e,r){var t=jQuery(this).children("input").val();""==t||/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(t)||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_date),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_required").each(function(e,r){var t=jQuery(this).children("input").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_select_required").each(function(e,r){var t=jQuery(this).children("select").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("select").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_rich_editor_required").each(function(e,r){}),jQuery("#"+r+" .pm_textarearequired").each(function(e,r){var t=jQuery(this).children("textarea").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("textarea").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_checkboxrequired").each(function(e,r){1==jQuery(this).children(".pmradio").children(".pm-radio-option").children('input[type="checkbox"]:checked').length>0||(jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_radiorequired").each(function(e,r){1==jQuery(this).children(".pmradio").children(".pm-radio-option").children('input[type="radio"]:checked').length>0||(jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_fileinput .pm_repeat").each(function(e,r){var t=jQuery(this).children("input").val().toLowerCase(),i=jQuery(this).children("input").attr("data-filter-placeholder");""==i&&(i=pm_error_object.allow_file_ext),i=i.toLowerCase(),new RegExp("(.*?).("+i+")$").test(t)||""==t||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.file_type),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_repeat_required .pm_repeat").each(function(e,r){var t=jQuery(this).children("input").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_user_pass").each(function(e,r){var t=jQuery(this).children("input").val(),i=t.length;""!=t&&i<7&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.short_password),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_confirm_pass").each(function(e,t){var i=jQuery(this).children("input").val(),n=n=jQuery("#"+r+" .pm_user_pass").children("input").val();n!=i&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.pass_not_match),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_recaptcha").each(function(e,r){0==grecaptcha.getResponse().length&&(jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())});var i="";return jQuery("#"+r+" .errortext").each(function(){var e=jQuery(this).html();i=e+i}),jQuery("#"+r+" .usernameerror").length>0&&(c=jQuery(".usernameerror").html(),i=c+i),jQuery("#"+r+" .useremailerror").length>0&&(d=jQuery(".useremailerror").html(),i=d+i),jQuery("#"+r+" .all_errors").html(i),""==jQuery("#"+r+" .all_errors").html()}function pm_frontend_check_username(e){jQuery(".pm_user_name").each(function(e,r){var t=this,i={action:"pm_check_user_exist",type:"validateUserName",userdata:jQuery(this).children("input").val()};jQuery.post(pm_ajax_object.ajax_url,i,function(e){"true"==e?(jQuery(t).children("input").addClass("warning"),jQuery(t).children(".usernameerror").html(pm_error_object.user_exist),jQuery(t).children(".usernameerror").show()):(jQuery(t).children("input").removeClass("warning"),jQuery(t).children(".usernameerror").html(""),jQuery(t).children(".usernameerror").hide())})})}function pm_frontend_check_useremail(e){jQuery(".pm_user_email").each(function(r,t){var i=this,n={action:"pm_check_user_exist",type:"validateUserEmail",userdata:jQuery(this).children("input").val(),previous_data:e};jQuery.post(pm_ajax_object.ajax_url,n,function(e){"true"==e?(jQuery(i).children("input").addClass("warning"),jQuery(i).children(".useremailerror").html(pm_error_object.email_exist),jQuery(i).children(".useremailerror").show()):(jQuery(i).children("input").removeClass("warning"),jQuery(i).children(".useremailerror").html(""),jQuery(i).children(".useremailerror").hide())})})}function pm_frontend_change_password(e){var r=jQuery(e).children(".pmrow").children(".pm-col").children(".pm-field-input").children("#pass1").val(),t=jQuery(e).children(".pmrow").children(".pm-col").children(".pm-field-input").children("#pass2").val();jQuery(e).children("#user_id").val();jQuery("#pm_reset_passerror").removeClass("pm_password_error"),jQuery("#pm_reset_passerror").removeClass("pm_password_success");var i={action:"pm_change_frontend_user_pass",pass1:r,pass2:t};return jQuery.post(pm_ajax_object.ajax_url,i,function(e){1==e?(jQuery("#pm_reset_passerror").addClass("pm_password_success"),jQuery("#pm_reset_passerror").html(pm_error_object.password_change_successfully),jQuery("#pm_reset_passerror").show(),window.location=pm_error_object.login_url):(jQuery("#pm_reset_passerror").addClass("pm_password_error"),jQuery("#pm_reset_passerror").html(e),jQuery("#pm_reset_passerror").show())}),!1}var searchRequest=null;function pm_advance_user_search(e){var r=jQuery("#pm-advance-search-form");jQuery("#pm_result_pane").html('<div class="pm-loader"></div>');var t=jQuery(".pmagic").find("a").css("color");jQuery(".pm-loader").css("border-top-color",t),""!==e?"Reset"==e?(r.trigger("reset"),jQuery("#advance_search_pane").hide(200),jQuery("#pagenum").attr("value",1),jQuery("input[type=checkbox]").attr("checked",!1),pm_change_search_field("")):jQuery("#pagenum").attr("value",e):jQuery("#pagenum").attr("value",1);var i=r.serializeArray(),n={};jQuery.each(i,function(){void 0!==n[this.name]?(n[this.name].push||(n[this.name]=[n[this.name]]),n[this.name].push(this.value)):n[this.name]=this.value}),null!=searchRequest&&searchRequest.abort(),searchRequest=jQuery.post(pm_ajax_object.ajax_url,n,function(e){if(e){jQuery("#pm_result_pane").html(e);var r=jQuery(".pmagic").find("a").css("color");jQuery(".pm-color").css("color",r),jQuery(".page-numbers.current").css("background",r)}})}function profile_magic_send_email(e){var r={action:"pm_send_change_pass_email",userid:e};return jQuery.post(pm_ajax_object.ajax_url,r,function(e){}),!1}function profile_magic_multistep_form_validation(e){var r=e.attr("id"),t=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;jQuery(".errortext").html(""),jQuery(".errortext").hide(),jQuery(".all_errors").html(""),jQuery(".warning").removeClass("warning"),jQuery("#"+r+" .pm_email").each(function(e,r){var i=jQuery(this).children("input").val();0==t.test(i)&&""!=i&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_email),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_number").each(function(e,r){var t=jQuery(this).children("input").val();0==jQuery.isNumeric(t)&&""!=t&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_number),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_phone_number").each(function(e,r){validate_phone_number(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_phone_number),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_mobile_number").each(function(e,r){validate_phone_number(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_mobile_number),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_facebook_url").each(function(e,r){validate_facebook_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_facebook_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_twitter_url").each(function(e,r){validate_twitter_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_twitter_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_google_url").each(function(e,r){validate_google_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_google_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_linked_in_url").each(function(e,r){validate_linked_in_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_linked_in_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_youtube_url").each(function(e,r){validate_youtube_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_youtube_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_mixcloud_url").each(function(e,r){validate_mixcloud_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_mixcloud_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_soundcloud_url").each(function(e,r){validate_soundcloud_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_soundcloud_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_instagram_url").each(function(e,r){validate_instagram_url(jQuery(this).children("input").val())||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_instagram_url),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_datepicker").each(function(e,r){var t=jQuery(this).children("input").val();""==t||/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(t)||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_date),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_required").each(function(e,r){var t=jQuery(this).children("input").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_select_required").each(function(e,r){var t=jQuery(this).children("select").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("select").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_textarearequired").each(function(e,r){var t=jQuery(this).children("textarea").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("textarea").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_checkboxrequired").each(function(e,r){1==jQuery(this).children(".pmradio").children(".pm-radio-option").children('input[type="checkbox"]:checked').length>0||(jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_radiorequired").each(function(e,r){1==jQuery(this).children(".pmradio").children(".pm-radio-option").children('input[type="radio"]:checked').length>0||(jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_fileinput .pm_repeat").each(function(e,r){var t=jQuery(this).children("input").val().toLowerCase(),i=jQuery(this).children("input").attr("data-filter-placeholder");""==i&&(i=pm_error_object.allow_file_ext),i=i.toLowerCase(),new RegExp("(.*?).("+i+")$").test(t)||""==t||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.file_type),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_repeat_required .pm_repeat").each(function(e,r){var t=jQuery(this).children("input").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_user_pass").each(function(e,r){var t=jQuery(this).children("input").val(),i=t.length;""!=t&&i<7&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.short_password),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_confirm_pass").each(function(e,t){var i=jQuery(this).children("input").val(),n=n=jQuery("#"+r+" .pm_user_pass").children("input").val();n!=i&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.pass_not_match),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_recaptcha").each(function(e,r){0==grecaptcha.getResponse().length&&(jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())});var i="";return jQuery("#"+r+" .errortext").each(function(){var e=jQuery(this).html();i=e+i}),jQuery("#"+r+" .usernameerror").length>0&&(c=jQuery(".usernameerror").html(),""!=jQuery.trim(c)&&jQuery(".pm_user_name").children("input").addClass("warning"),i=c+i),jQuery("#"+r+" .useremailerror").length>0&&(d=jQuery(".useremailerror").html(),""!=jQuery.trim(d)&&jQuery(".pm_user_email").children("input").addClass("warning"),i=d+i),jQuery("#"+r+" .all_errors").html(i),""==jQuery("#"+r+" .all_errors").html()}function openParentTab(){if(locationHash=location.hash.substring(1),locationHash){var e=jQuery("#"+locationHash);if(e.length){var r=e;return jQuery("li.pm-profile-tab a").removeClass("active"),jQuery(this).addClass("active"),jQuery(".pg-profile-tab-content").hide(),jQuery(r).find(".pm-section-content:first").show(),jQuery("li.hideshow ul").hide(),jQuery(r).fadeIn("slow"),!1}}}function generateTabs(e){for(var r in html="",e)tab=e[r],html=html+'<li class="multipage_tab"><a href="#" onclick="return jQuery(\'#multipage\').gotopage('+tab.number+');">'+tab.title+"</a></li>";jQuery('<ul class="multipage_tabs" id="multipage_tabs">'+html+'<div class="clearer"></div></ul>').insertBefore("#multipage")}function setActiveTab(e,r){jQuery("#multipage_tabs li").each(function(e){e+1==r?jQuery(this).addClass("active"):jQuery(this).removeClass("active")})}function transition(e,r){jQuery(e).fadeOut("fast",function(){jQuery(r).fadeIn("fast")})}function textpages(e,r,t){jQuery(e).html(r+" of "+t)}function pm_user_image_validation(e){var r=jQuery(e).children(".pm-user-image").val().toLowerCase();if(""==r)return jQuery(e).children("pm-user-image").addClass("warning"),jQuery(e).children(".pm-popup-error").html(pm_error_object.required_field),jQuery(e).children(".pm-popup-error").show(),!1;var t="jpg|jpeg|png|gif";return""==t&&(t=pm_error_object.allow_file_ext),t=t.toLowerCase(),new RegExp("(.*?).("+t+")$").test(r)||""==r?(jQuery(e).children(".pm-popup-error").html(""),jQuery(e).children(".pm-popup-error").hide(),!0):(jQuery(e).children("pm-user-image").addClass("warning"),jQuery(e).children(".pm-popup-error").html(pm_error_object.file_type),jQuery(e).children(".pm-popup-error").show(),!1)}function callPmPopup(e){var r=e+"-dialog";jQuery(r).siblings(".pm-popup-mask").show(),jQuery(r).show(),jQuery(".pm-popup-container").css("animation","pm-popup-in 0.3s ease-out 1")}function profile_magic_blogpost_validation(){jQuery(".errortext").html(""),jQuery(".errortext").hide(),jQuery(".all_errors").html(""),jQuery(".warning").removeClass("warning"),jQuery("#pm_add_blog_post .pm_required").each(function(e,r){var t=jQuery(this).children("input").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#pm_add_blog_post .pm_fileinput .pm_repeat").each(function(e,r){var t=jQuery(this).children("input").val().toLowerCase(),i="jpg|jpeg|png|gif";""==i&&(i=pm_error_object.allow_file_ext),i=i.toLowerCase(),new RegExp("(.*?).("+i+")$").test(t)||""==t||(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.file_type),jQuery(this).children(".errortext").show())});var e="";return jQuery("#pm_add_blog_post .errortext").each(function(){var r=jQuery(this).html();e=r+e}),jQuery("#pm_add_blog_post .all_errors").html(e),""==jQuery("#pm_add_blog_post .all_errors").html()&&(jQuery('input[name="pg_blog_submit"]').attr("disabled","disabled"),!0)}function load_more_pg_blogs(e){jQuery(".pm-load-more-blogs").hide(),jQuery(".pg-load-more-container .pm-loader").show();var r=parseInt(jQuery("#pg_next_blog_page").val()),t=r+1,i={action:"pm_load_pg_blogs",uid:e,page:r};jQuery.post(pm_ajax_object.ajax_url,i,function(e){e&&(jQuery(".pg-load-more-container .pm-loader").hide(),jQuery("#pg_next_blog_page").val(t),jQuery("#pg-blog-container").append(e))})}function load_more_user_blogs_shortcode_posts(e,r){jQuery(".pm-load-more-blogs").hide(),jQuery(".pg-load-more-container .pm-loader").show();var t=parseInt(jQuery("#pg_next_blog_page").val()),i=t+1,n={action:"pm_load_user_blogs_shortcode_posts",authors:e,posttypes:r,page:t};jQuery.post(pm_ajax_object.ajax_url,n,function(e){e&&(jQuery(".pg-load-more-container .pm-loader").hide(),jQuery("#pg_next_blog_page").val(i),jQuery("#pg-user-blog-container").append(e))})}function pm_delete_account_setting(e){var r=e.id;jQuery("#"+r+" .errortext").html(""),jQuery("#"+r+" .errortext").hide(),jQuery("#"+r+" .all_errors").html(""),jQuery("#"+r+" .warning").removeClass("warning"),jQuery("#"+r+" .pm_required").each(function(e,r){var t=jQuery(this).children("input").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())});var t="";return jQuery("#"+r+" .errortext").each(function(){var e=jQuery(this).html();t=e+t}),jQuery("#"+r+" .all_errors").html(t),""==jQuery("#"+r+" .all_errors").html()}function pm_save_account_setting(e){var r=e.id,t=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;jQuery("#"+r+" .errortext").html(""),jQuery("#"+r+" .errortext").hide(),jQuery("#"+r+" .all_errors").html(""),jQuery("#"+r+" .warning").removeClass("warning"),jQuery("#"+r+" .pm_required").each(function(e,r){var t=jQuery(this).children("input").val();""==(t=jQuery.trim(t))&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.required_field),jQuery(this).children(".errortext").show())}),jQuery("#"+r+" .pm_email").each(function(e,r){var i=jQuery(this).children("input").val();0==t.test(i)&&""!=i&&(jQuery(this).children("input").addClass("warning"),jQuery(this).children(".errortext").html(pm_error_object.valid_email),jQuery(this).children(".errortext").show())});var i="";return jQuery("#"+r+" .errortext").each(function(){var e=jQuery(this).html();i=e+i}),jQuery("#"+r+" .all_errors").html(i),""==jQuery("#"+r+" .all_errors").html()}function show_pg_section_right_panel(){jQuery(".pg-mobile-479 .pm-section-right-panel").show(),jQuery(".pg-mobile-479 .pm-section-left-panel").hide(),jQuery(".pg-mobile-479 .pg-left-panel-icon").show()}function show_pg_section_left_panel(){jQuery(".pg-mobile-479 .pm-section-right-panel").hide(),jQuery(".pg-mobile-479 .pm-section-left-panel").show(),jQuery(".pg-mobile-479 .pg-left-panel-icon").hide()}function pg_remove_user_group(e,r){var t={action:"pm_remove_user_group",uid:e,gid:r};jQuery("#pg_edit_group_html_container").html('<div class="pg-edit-group-popup-loader"><div class="pm-loader"></div></div>');var i=jQuery(".pmagic").find("a").css("color");jQuery(".pm-loader").css("border-top-color",i),jQuery.post(pm_ajax_object.ajax_url,t,function(e){window.location.reload(!0)})}function pg_open_group_tab(){jQuery(".pm-profile-tab ul li.pg-group-tab"),jQuery("ul.pm-profile-tab-wrap");var e=0;jQuery("ul.pm-profile-tab-wrap").children("li").each(function(){jQuery(this).find("a").removeClass("active");var r=jQuery(this).find('a[href="#pg-groups"]');r.length&&(jQuery(".pg-profile-tab-content").css("display","none"),r.addClass("active"),e),e++}),jQuery("#pg-groups").css("display","block")}!function(e){var r=e(window),t=e("html"),i=0;r.resize(function(){return r.width()<479?(0==i&&(show_pg_section_left_panel(),i=1),t.addClass("pg-mobile-479")):(e(".pm-section-left-panel").show(),e(".pm-section-right-panel").show(),t.removeClass("pg-mobile-479"),r.width()<760?t.addClass("pg-mobile-760"):(t.removeClass("pg-mobile-760"),r.width()<979?t.addClass("pg-mobile-979"):void t.removeClass("pg-mobile-979")))}).trigger("resize")}(jQuery);