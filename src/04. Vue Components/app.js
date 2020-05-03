Vue.component('post', {
	template: `
		<div class="post">
			<div class="profile"></div>
			<div class="post-body">
				<h3>{{ post.title }}</h3>
				<p>{{ post.body }}</p>
			</div>
		</div>`,
	props: ['post']
});

let app = new Vue({
	el: '#app',
	data: {
		posts: [
			{ title: 'د ليکني سرليک', body: 'د ليکني متن به دلته موجود وي.' },
			{ title: 'د دوهمي ليکني سرليک', body: 'د ليکني متن به دلته موجود وي.' },
			{ title: 'د دريمي ليکني سرليک', body: 'د ليکني متن به دلته موجود وي.' },
			{ title: 'د څلورمي ليکني سرليک', body: 'د ليکني متن به دلته موجود وي.' },
			{ title: 'د پنځمي ليکني سرليک', body: 'د ليکني متن به دلته موجود وي.' }
		]
	}
});