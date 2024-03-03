
$(".workPreview").on("mouseenter", function(){
    $(".heroSection").delay("slow").fadeOut();
    $(".myWork").delay("slow").fadeIn();
});

$(".myWork").on("mouseleave", function(){
    $(".myWork").delay("slow").fadeOut();
    $(".heroSection").delay("slow").fadeIn();
});

$(".skillsPreview").on("mouseenter", function(){
    $(".heroSection").delay("slow").fadeOut();
    $(".mySkills").delay("slow").fadeIn();
});

$(".mySkills").on("mouseleave", function(){
    $(".heroSection").delay("slow").fadeIn();
    $(".mySkills").delay("slow").fadeOut();
});


console.log("Your index.js file is loaded correctly!")

/*Note: if you mouse quickly over both sections, both will register 
and show up*/