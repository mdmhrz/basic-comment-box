document.getElementById('comment-btn').addEventListener('click', function (){
    const commentTextBox = document.getElementById('comment-text-box');
    const commentText = commentTextBox.value;

    if (commentText === '') {
        alert('Please enter a comment!');
        return;
    }

    const commentWorld = document.getElementById('comment-world');
    
    const newComment = document.createElement('section');
    newComment.innerHTML = `
    <div class="comment-container">
        <h4 class="comment-author">Robiul Hakim</h4>
        <small class="comment-time">10 days ago</small>
        <p class="comment-text"> ${commentText}.</p>
    </div>
    `;
    commentWorld.append(newComment);
    commentTextBox.value = '';
})