function verifyPrivacy(){jQuery("#rcp_privacy").change(function(){jQuery(this).is(":checked")?jQuery("#rcp_submit").prop("disabled",!1):jQuery("#rcp_submit").prop("disabled",!0)})}function navToggle(){jQuery(".nav-toggle").click(function(){jQuery("body").toggleClass("show-nav");var e=jQuery(".main-navigation").outerHeight()+jQuery(".user-info").outerHeight();return jQuery(".secure-side").css("top",e),!1})}function videoOverlay(){var e='<iframe src="//player.vimeo.com/video/62298065?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1" width="650" height="366" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';jQuery("#watch").click(function(){return jQuery(".overlay .video").html(e),jQuery(".video").fitVids(),jQuery(".overlay").addClass("show-overlay"),!1}),jQuery("#close").click(function(){return jQuery(".overlay .video").html(""),jQuery(".overlay").removeClass("show-overlay"),!1}),jQuery(".overlay").click(function(){jQuery(".overlay .video").html(""),jQuery(".overlay").removeClass("show-overlay")}),jQuery(".overlay-container").click(function(){event.stopPropagation()})}function playMedia(){jQuery(".action-required").click(function(){var e=jQuery(this).data("type");if(void 0!==e)if("audio"===e){var r=jQuery(this).data("code"),i='<audio src="'+r+'" type="audio/mp3" controls="controls" autoplay>';jQuery(this).hasClass("btn")&&(jQuery(this).parent(".content-action").nextAll(".content-player").slideDown(),jQuery(this).parent(".content-action").nextAll(".content-player").html(i)),jQuery("audio").mediaelementplayer()}else if("video"===e){var t=jQuery(this).data("code"),o='<iframe src="//player.vimeo.com/video/'+t+'?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1" width="650" height="366" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';jQuery(".overlay .video").html(o),jQuery(".video").fitVids(),jQuery(".overlay").addClass("show-overlay")}return!1})}function btnCount(){jQuery(".content-action").each(function(){var e=jQuery(this).find(".btn").length;2==e&&jQuery(this).addClass("two"),3==e&&jQuery(this).addClass("three")})}function subnavToggle(){jQuery(".subnav-toggle").click(function(){return jQuery(".sub-navigation").hasClass("show")?(jQuery(".sub-navigation").slideUp(),jQuery(".subnav-toggle").html("Pages in this Section"),jQuery(".sub-navigation").removeClass("show")):(jQuery(".sub-navigation").slideDown(),jQuery(".subnav-toggle").html("Hide Pages"),jQuery(".sub-navigation").addClass("show")),!1})}function passwordToggle(){jQuery(".password-toggle").click(function(){return jQuery(this).hasClass("show")?(jQuery(this).prev().attr("type","text"),jQuery(this).removeClass("show"),jQuery(this).html("Hide")):(jQuery(this).prev().attr("type","password"),jQuery(this).addClass("show"),jQuery(this).html("Show")),!1}),jQuery("#rcp_user_pass").blur(function(){jQuery(this).attr("type","password"),jQuery(".password-toggle").addClass("show"),jQuery(".password-toggle").html("Show")})}function sidebarHeight(){var e=jQuery(".secure-page").outerHeight();jQuery(".secure-side").css("height",e)}function contentBlockHeight(){jQuery(".odd").each(function(e){var r=jQuery(this).next(".even").outerHeight(),i=jQuery(this).outerHeight();r>i?(jQuery(this).css("height",r),jQuery(this).next(".even").css("height",r)):(jQuery(this).css("height",i),jQuery(this).next(".even").css("height",i))})}function sortTable(){jQuery("#alumniTable").tablesorter({sortList:[[1,0]],headers:{4:{sorter:!1}}})}function searchTable(){var e=jQuery("#alumniTable tbody tr");jQuery("#search").keyup(function(){var r=jQuery.trim(jQuery(this).val()).replace(/ +/g," ").toLowerCase();e.show().filter(function(){var e=jQuery(this).text().replace(/\s+/g," ").toLowerCase();return!~e.indexOf(r)}).hide()})}function showMore(){jQuery(".more-ha").click(function(){return jQuery(".holy-ambition-full").hasClass("expanded")?(jQuery(".holy-ambition-full").removeClass("expanded"),jQuery(".holy-ambition-full").css("display","none"),jQuery(".overlay").css("visibility","hidden"),jQuery(".overlay").css("opacity","0")):(jQuery(".holy-ambition-full").addClass("expanded"),jQuery(".holy-ambition-full").css("display","block"),jQuery(".overlay").css("visibility","visible"),jQuery(".overlay").css("opacity","1")),!1})}function labelOverlays(){jQuery(".search-field input").keydown(function(){jQuery(this).siblings("label").css("display","none")}),jQuery(".search-field input").blur(function(){jQuery(this).val()||jQuery(this).siblings("label").css("display","inline")}),jQuery(".search-field input").each(function(){""!=jQuery(this).val()&&jQuery(this).siblings("label").css("display","none")})}jQuery(document).ready(function(){var e=$(window).width();e>800&&contentBlockHeight(),sortTable(),searchTable(),showMore(),labelOverlays(),navToggle(),jQuery(".video, .video-box").fitVids(),videoOverlay(),playMedia(),jQuery("video, audio").mediaelementplayer({}),btnCount(),subnavToggle(),passwordToggle(),verifyPrivacy()}),jQuery(window).load(function(){var e=$(window).width();e>700&&sidebarHeight()});