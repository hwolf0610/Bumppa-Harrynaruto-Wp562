<?php
/** 
* Template for Off canvas Menu
* @since Multiple Business 1.0.0
*/
?>
<div id="offcanvas-menu">
	<div class="close-offcanvas-menu">
		<span class="kfi kfi-close-alt2"></span>
	</div>
	<?php if(!multiple_business_get_option( 'disable_top_header' )): ?>
		<div class="header-search-wrap">
			<?php get_search_form(); ?>
		</div>
	<?php endif; ?>
	<?php get_template_part( 'template-parts/header/header', 'callback' ); ?>
	<div id="primary-nav-offcanvas" class="offcanvas-navigation">
		<?php multiple_business_get_menu( 'primary' ); ?>
	</div>
	<?php if(!multiple_business_get_option( 'disable_top_header' )): ?>
		<?php get_template_part( 'template-parts/header/header', 'contact' ); ?>
	<?php endif; ?>
	<?php if(!multiple_business_get_option( 'disable_top_header' )): ?>
		<div class="top-header-right">
			<div class="socialgroup">
				<?php multiple_business_get_menu( 'social' ); ?>
			</div>
			<?php get_template_part('template-parts/header/header', 'cart'); ?>
		</div>
	<?php endif; ?>
</div>