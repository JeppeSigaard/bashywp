<?php
/*
Plugin Name: Bashy
Plugin URI: https://smartmonkey.dk/bashy
Description: BASH like commands for WP admin panel
Author: SmartMonkey
Version: 0.0.1
Author URI: https://smartmonkey.dk/
	
*/

add_action('admin_enqueue_scripts','bashy_enqueue_script');

function bashy_enqueue_script(){
    
    wp_enqueue_style( 'bashy', plugins_url( 'style/main.css', __FILE__ ), false, '1.0.0' );
    wp_enqueue_script('bashy', plugins_url( 'js/main.min.js', __FILE__ ) );

}