
		const input = document.querySelector('input');
		const btn = document.querySelector('.addTask > button');
		const listContainer = document.querySelector('.list-container');

		btn.addEventListener('click', addList);
		input.addEventListener('keyup', (e) => {
			(e.keyCode === 13 ? addList(e) : null);
		})

		function addList(e) {
			const notCompleted = document.querySelector('.NotCompleted');
			const Completed = document.querySelector('.Completed');

			const newLi = document.createElement('li');
			const checkBtn = document.createElement('button');
			const delBtn = document.createElement('button');

			checkBtn.innerHTML = '<i class="fa fa-check"></i>';
			delBtn.innerHTML = '<i class="fa fa-trash"></i>';

			if (input.value !== '') {
				const taskText = input.value;
				const currentDate = new Date().toLocaleString();

				newLi.textContent = taskText + " (Added on " + currentDate + ")";
				input.value = '';

				notCompleted.appendChild(newLi);
				newLi.appendChild(checkBtn);
				newLi.appendChild(delBtn);
			}

			checkBtn.addEventListener('click', function() {
				const parent = this.parentNode;
				parent.remove();
				Completed.appendChild(parent);
				checkBtn.style.display = 'none';
			});

			delBtn.addEventListener('click', function() {
				const parent = this.parentNode;
				parent.remove();
			});
		}