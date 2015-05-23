// JavaScript Document



$(document).ready(function(){
	
	// Set these DIVs to show for browsers suporting JavaScipt
	$('.gallery_data').css('display','block');
	$('.gallery_thumbnails').css('width','500px');
	$('.gallery_preview').css('display','block');
	$('.gallery_caption').css('display','block');
	
	// Capture the thumbnail links
	$('.gallery_thumbnails a').click(function(e){
		
		// Disables standard link behavior
		e.preventDefault();//Tells browser to not shift to a new window and display high resolution image.	
		
		//Setup vars from thumbnails
		var photo_caption = $(this).attr('title');
		var photo_fullsize = $(this).attr('href');
		var photo_preview = photo_fullsize.replace('_fullsize', '_preview');
		
		// Fade out preview, preload new image, fade preview back in
		$('.gallery_caption').slideUp(500);
		$('.gallery_preview').fadeOut(500,function(){
			
			$('.gallery_preload_area').html('<img src="'+photo_preview+'" />');
			$('.gallery_preload_area img').imgpreload(function(){
				$('.gallery_preview').html('<a class="overlayLink" href="'+photo_fullsize+'" title="'+photo_caption+'" style="background-image:url('+photo_preview+');"></a>');
				$('.gallery_caption').html('<p><a class="overlayLink zoom" href="'+photo_fullsize+'" title="'+photo_caption+'">View Larger</a></p><p>'+photo_caption+'</p>');
				$('.gallery_preview').fadeIn(500);
				$('.gallery_caption').slideDown(500);
				setFancyBoxLinks();
				updateThumbnails();
			});
			
		});	
	});
	
	
	// Set the first preview image
	// Set the first preview image
	var first_photo_caption = $('.gallery_thumbnails a').first().attr('title');
	var first_photo_fullsize = $('.gallery_thumbnails a').first().attr('href');
	var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");
	$('.gallery_preview').html('<a class="overlayLink" title="'+first_photo_caption+'" href="'+first_photo_fullsize+'" style="background-image:url('+first_photo_preview+');"></a>');
	$('.gallery_caption').html('<p><a class="overlayLink zoom" title="'+first_photo_caption+'" href="'+first_photo_fullsize+'">View larger</a></p><p>'+first_photo_caption+'<a href="'+first_photo_fullsize+'" style="background-image:url('+first_photo_preview+');"></a></p>');
	updateThumbnails();
	setFancyBoxLinks();
	
});


function setFancyBoxLinks(){
	//links for fancybox
	$('a.overlayLink').fancybox({
		'titlePosition' : 'over',
		'overlayColor' : '#000',
		'overlayOpacity' : 0.8,
		'tansitionOut' : 'elastic',
		'transitionIn' : 'elastic',
		'autoScale' : true
		
		});
	}
	
function updateThumbnails(){
	$('.gallery_thumbnails a').each(function(index){
		if( $('.gallery_preview a').attr('href') == $(this).attr('href')  ){
			$(this).addClass('selected');
			$(this).children().fadeTo(250, .4)
			
		}else{
			$(this).removeClass('selected');
			$(this).children().css('opacity' , '1');	
			}
		
		});
	}
	
	