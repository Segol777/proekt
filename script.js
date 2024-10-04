document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".post_");
    const eventTypeFilter = document.getElementById("event-type");
    const eventDistanceFilter = document.getElementById("event-distance");
    const eventCategoryFilter = document.getElementById("event-category");
    const eventDateFilter = document.getElementById("event-date");
    const searchInput = document.querySelector(".search_input");

    function filterPosts() {
        const selectedType = eventTypeFilter.value;
        const selectedDistance = parseInt(eventDistanceFilter.value);
        const selectedCategory = eventCategoryFilter.value;
        const selectedDate = eventDateFilter.value;
        const searchQuery = searchInput.value.toLowerCase();

        posts.forEach(post => {
            const postType = post.dataset.type;
            const postDistance = parseInt(post.dataset.distance);
            const postCategory = post.dataset.category.toLowerCase();
            const postDate = post.dataset.date;
            const postTitle = post.querySelector("h4").innerText.toLowerCase();
            const postDescription = post.querySelector("p").innerText.toLowerCase();
            const postDistanceText = `${postDistance} km`;  
            const postCategoryText = postCategory;

            let matchesType = (selectedType === "all" || postType === selectedType);
            let matchesDistance = (isNaN(selectedDistance) || postDistance == selectedDistance);
            let matchesCategory = (selectedCategory === "all" || postCategory.toLowerCase() === selectedCategory.toLowerCase());
            let matchesDate = (selectedDate === "all" || postDate === selectedDate);
            let matchesSearch = (postTitle.includes(searchQuery) || postDescription.includes(searchQuery) || postDistanceText.includes(searchQuery) || postCategoryText.includes(searchQuery));

            if (matchesType && matchesDistance && matchesCategory && matchesDate && matchesSearch) {
                post.style.display = "flex";
            } else {
                post.style.display = "none";
            }
        });
    }

    eventTypeFilter.addEventListener("change", filterPosts);
    eventDistanceFilter.addEventListener("change", filterPosts);
    eventCategoryFilter.addEventListener("change", filterPosts);
    eventDateFilter.addEventListener("change", filterPosts);
    searchInput.addEventListener("input", filterPosts);

    filterPosts();
});
