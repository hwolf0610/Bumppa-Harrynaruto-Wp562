function pg_check_password_strenth(){var e=checkStrength(jQuery("#pm_new_pass").val());jQuery("#pg_password_strenth_text").html(e),"Medium"!=e&&"Strong"!=e||jQuery("#pm_member_reset_password_link").attr("onclick","pm_reset_user_password()")}function checkStrength(e){jQuery("#pg_password_meter_outer").show();var r=0;return e.length>7&&(r+=1),e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(r+=1),e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)&&(r+=1),e.match(/([!,%,&,@,#,$,^,*,?,_,~])/)&&(r+=1),e.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)&&(r+=1),r<2?(jQuery("#pg_password_meter_inner").removeClass(),jQuery("#pg_password_meter_inner").addClass("pg-pass-weak"),jQuery("#pm_member_reset_password_link").removeClass(),jQuery("#pm_member_reset_password_link").addClass("pg-setting-disabled"),"Weak"):2==r?(jQuery("#pg_password_meter_inner").removeClass(),jQuery("#pg_password_meter_inner").addClass("pg-pass-good"),jQuery("#pm_member_reset_password_link").removeClass(),"Medium"):(jQuery("#pg_password_meter_inner").removeClass(),jQuery("#pg_password_meter_inner").addClass("pg-pass-strong"),jQuery("#pm_member_reset_password_link").removeClass(),"Strong")}