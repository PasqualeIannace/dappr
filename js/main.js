const { createApp } = Vue

createApp({
    data() {
        return {
            navMenu: [
                {
                    iconClass: 'fa-solid fa-house-chimney fa-xl',
                    iconColor: 'color: #ffffff',
                },
                {
                    iconClass: 'fa-solid fa-building-columns fa-xl',
                    iconColor: 'color: #ffffff',
                },
                {
                    iconClass: 'fa-solid fa-square-poll-vertical fa-xl',
                    iconColor: 'color: #ffffff',
                },
                {
                    iconClass: 'fa-solid fa-hand-holding-dollar fa-xl',
                    iconColor: 'color: #ffffff',
                },
                {
                    iconClass: 'fa-solid fa-file-lines fa-xl',
                    iconColor: 'color: #ffffff',
                },
                {
                    iconClass: 'fa-solid fa-users fa-xl',
                    iconColor: 'color: #ffffff',
                },
                {
                    iconClass: 'fa-solid fa-envelope fa-xl',
                    iconColor: 'color: #ffffff',
                },
                {
                    iconClass: 'fa-solid fa-circle-play fa-xl',
                    iconColor: 'color: #ffffff',
                },

            ],

            contacts: [
                {
                    name: 'Dasha',
                    avatar: './img/avatar_6.jpg',
                    online: true,
                    newMessages: 2,
                    messages: [
                        {
                            date: '04/23/2024 15:00:00',
                            message: 'Hey David, How are you today?',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Tina',
                    avatar: './img/avatar_2.jpg',
                    online: true,
                    newMessages: 0,
                    messages: [
                        {
                            date: '04/23/2024 15:40:00',
                            message: 'Hey Pasqui, Which one do you think i better look?',
                            status: 'received'
                        },
                        {
                            date: '04/23/2024 15:41:00',
                            images: [
                                './img/placeholder.jpg',
                                './img/placeholder.jpg',
                                './img/placeholder.jpg',
                            ],
                            status: 'received'
                        },
                        {
                            date: '04/23/2024 15:42:00',
                            message: 'I like 2nd one it looks awesome!',
                            status: 'sent'
                        },
                        {
                            date: '04/23/2024 15:42:22',
                            message: 'Can you please upload these files on socials!',
                            status: 'sent'
                        },
                        {
                            date: '04/23/2024 15:45:00',
                            message: 'Sure I will upload it soon',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Mike',
                    avatar: './img/avatar_3.jpg',
                    online: true,
                    newMessages: 2,
                    messages: [
                        {
                            date: '04/23/2024 15:00:00',
                            message: 'Hey David, How are you today?',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Smith',
                    avatar: './img/avatar_4.jpg',
                    online: true,
                    newMessages: 0,
                    messages: [
                        {
                            date: '04/23/2024 15:00:00',
                            message: 'Hey David, How are you today?',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Tania',
                    avatar: './img/avatar_5.jpg',
                    online: true,
                    newMessages: 2,
                    messages: [
                        {
                            date: '04/23/2024 15:00:00',
                            message: 'Hey David, How are you today?',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Louis',
                    avatar: './img/avatar_1.jpg',
                    online: true,
                    newMessages: 0,
                    messages: [
                        {
                            date: '04/23/2024 15:00:00',
                            message: 'Hey David, How are you today?',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Ugo',
                    avatar: './img/avatar_7.jpg',
                    online: true,
                    newMessages: 2,
                    messages: [
                        {
                            date: '04/23/2024 15:00:00',
                            message: 'Hey David, How are you today?',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Luigi',
                    avatar: './img/avatar_8.jpg',
                    online: true,
                    newMessages: 0,
                    messages: [
                        {
                            date: '04/23/2024 15:00:00',
                            message: 'Hey David, How are you today?',
                            status: 'received'
                        },
                    ],
                },
            ],

            indexChat: 1,

            currentIndex: 0,

            myInput: "",

            search: "",
        }
    },
    methods: {
        isNewStatus(status, currentIndex) {
            if (currentIndex === 0) {
                // Se è il primo messaggio return true
                return true;
            }
            const previousStatus = this.contacts[this.indexChat].messages[currentIndex - 1].status;
            return status !== previousStatus;
        },

        selezionaChat(indice) {
            // aggiorno l'indice
            this.indexChat = indice;
        },

        send() {
            if (!this.myInput == "") {
                // genero il messaggio come oggetto
                let myText = { date: new Date(), message: this.myInput, status: 'sent' };
                // pusho il messaggio nell'array
                this.contacts[this.indexChat].messages.push(myText);

                // Rimuovo la chat corrente dall'array
                let currentChat = this.contacts.splice(this.indexChat, 1)[0];
                // Inserisco la chat corrente nella parte superiore dell'array
                this.contacts.unshift(currentChat);

                // Resetto l'indice della chat corrente
                this.indexChat = 0;
                // pulisco il campo input
                this.myInput = "";
            }
        },
    },

    mounted() {
    },

    //search bar
    computed: {
        filteredList() {
            return this.contacts.filter(searchBar => {
                return searchBar.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }

}).mount('#app')