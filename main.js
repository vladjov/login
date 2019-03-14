$(document).ready(function(){
	$('.login_info_box').fadeOut();
	$('.login_show').addClass('show_log_panel');
	});


$('.login_reg_panel input[type="radio"]').on('change', function() {
    if($('#log_login_show').is(':checked')) {
        $('.register_info_box').fadeOut(); 
        $('.login_info_box').fadeIn();
        
        $('.white_panel').addClass('right_log');
        $('.register_show').addClass('show_log_panel');
        $('.login_show').removeClass('show_log_panel');
      
    }
    else if($('#log_reg_show').is(':checked')) {
        $('.register_info_box').fadeIn();
        $('.login_info_box').fadeOut();
        
        $('.white_panel').removeClass('right_log');
        $('.login_show').addClass('show_log_panel');
        $('.register_show').removeClass('show_log_panel');
    }
});   