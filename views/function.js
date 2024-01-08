document.addEventListener('DOMContentLoaded', function () {
    // 예시 데이터
    var itemsData = [
        { title: 'Item 1', content: 'Content for Item 1' },
        { title: 'Item 2', content: 'Content for Item 2' },
        // 추가적인 아이템 데이터를 필요에 따라 배열에 추가할 수 있습니다.
    ];

    // 아이템 리스트 컨테이너
    var itemListContainer = document.getElementById('item-list-container');

    // 아이템 데이터를 기반으로 아이템 리스트를 동적으로 생성
    itemsData.forEach(function (itemData) {
        var listItem = createListItem(itemData);
        itemListContainer.appendChild(listItem);
    });

    // 아이템 리스트 생성 함수
    function createListItem(data) {
        var listItem = document.createElement('div');
        listItem.classList.add('item-list', 'd-flex', 'flex-column', 'flex-md-row', 'p-4', 'gap-4', 'py-md-5', 'align-items-center', 'justify-content-center');

        var listGroup = document.createElement('div');
        listGroup.classList.add('list-group');

        var listGroupItem = document.createElement('a');
        listGroupItem.href = '#';
        listGroupItem.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'gap-3', 'py-3');

        var img = document.createElement('img');
        img.src = 'https://github.com/twbs.png';
        img.alt = 'twbs';
        img.width = 32;
        img.height = 32;
        img.classList.add('rounded-circle', 'flex-shrink-0');

        var textContainer = document.createElement('div');
        textContainer.classList.add('d-flex', 'gap-2', 'w-100', 'justify-content-between');

        var titleElement = document.createElement('h6');
        titleElement.classList.add('mb-0');
        titleElement.innerText = data.title;

        var contentElement = document.createElement('p');
        contentElement.classList.add('mb-0', 'opacity-75');
        contentElement.innerText = data.content;

        var smallElement = document.createElement('small');
        smallElement.classList.add('opacity-50', 'text-nowrap');
        smallElement.innerText = 'now';

        // 구성 요소들을 하나로 조립
        textContainer.appendChild(titleElement);
        textContainer.appendChild(contentElement);

        listGroupItem.appendChild(img);
        listGroupItem.appendChild(textContainer);
        listGroupItem.appendChild(smallElement);

        listGroup.appendChild(listGroupItem);
        listItem.appendChild(listGroup);

        return listItem;
    }
});
