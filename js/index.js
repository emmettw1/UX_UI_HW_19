$(".workPreview").on("mouseenter", function(){
    $(".heroSection").fadeOut();
    $(".myWork").fadeIn();
});

$(".myWork").on("mouseleave", function(){
    $(".myWork").fadeOut();
    $(".heroSection").fadeIn();
});

$(".skillsPreview").on("mouseenter", function(){
    $(".heroSection").fadeOut();
    $(".mySkills").fadeIn();
});

$(".mySkills").on("mouseleave", function(){
    $(".heroSection").fadeIn();
    $(".mySkills").fadeOut();
});


console.log("Your index.js file is loaded correctly!")

/*Note: if you mouse quickly over both sections, both will register 
and show up*/