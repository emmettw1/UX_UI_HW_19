
$(".workPreview").on("mouseenter", function(){
    $(".heroSection").toggleClass("displayToggle");
    $(".myWork").toggleClass("displayToggle");
});

$(".myWork").on("mouseleave", function(){
    $(".heroSection").toggleClass("displayToggle");
    $(".myWork").toggleClass("displayToggle");
});

$(".skillsPreview").on("mouseenter", function(){
    $(".heroSection").toggleClass("displayToggle");
    $(".mySkills").toggleClass("displayToggle");
});

$(".mySkills").on("mouseleave", function(){
    $(".heroSection").toggleClass("displayToggle");
    $(".mySkills").toggleClass("displayToggle");
});


console.log("Your index.js file is loaded correctly!")