<template>
    <div class="container" :class="{ share: share }">
        <h4>{{ text }}</h4>
        <div v-if="share" class="shareIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                    d="M14.85 2.5H10.15C9.11001 2.5 8.26001 3.34 8.26001 4.38V5.32C8.26001 6.36 9.10001 7.2 10.14 7.2H14.85C15.89 7.2 16.73 6.36 16.73 5.32V4.38C16.74 3.34 15.89 2.5 14.85 2.5Z"
                    fill="#357838" />
                <path
                    d="M17.74 5.31998C17.74 6.90998 16.44 8.20998 14.85 8.20998H10.15C8.56004 8.20998 7.26004 6.90998 7.26004 5.31998C7.26004 4.75998 6.66004 4.40998 6.16004 4.66998C5.44379 5.0514 4.84483 5.62052 4.42733 6.31635C4.00983 7.01219 3.78953 7.80851 3.79004 8.61998V18.03C3.79004 20.49 5.80004 22.5 8.26004 22.5H16.74C19.2 22.5 21.21 20.49 21.21 18.03V8.61998C21.21 6.90998 20.25 5.41998 18.84 4.66998C18.34 4.40998 17.74 4.75998 17.74 5.31998ZM12.88 17.45H8.50004C8.09004 17.45 7.75004 17.11 7.75004 16.7C7.75004 16.29 8.09004 15.95 8.50004 15.95H12.88C13.29 15.95 13.63 16.29 13.63 16.7C13.63 17.11 13.29 17.45 12.88 17.45ZM15.5 13.45H8.50004C8.09004 13.45 7.75004 13.11 7.75004 12.7C7.75004 12.29 8.09004 11.95 8.50004 11.95H15.5C15.91 11.95 16.25 12.29 16.25 12.7C16.25 13.11 15.91 13.45 15.5 13.45Z"
                    fill="#357838" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: ['text', 'share'],
    // mounted(){
    //     console.log(this.share, 'WOEROJ');
    // },
    computed: {
        // share(){
        //     return this.share;
        // }
    }
}

</script>

<style scoped>
.container {
    position: relative;
    /* flex-direction: column; */
    margin-bottom: 1rem;
    padding: 2.8rem 4rem;
    align-items: center;
    border-radius: 0.3125rem;
    background: linear-gradient(135deg, #C2F2F9 0%, #9EDCDD 100%);
    overflow: hidden;
    max-width: 32rem;
    text-align: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 2;
}

h4 {
    color: var(--teal-3);
}


.share {
    background: none;
    background-color: var(--shareGreen);
}

.share.container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
}

.share h4 {
    color: var(--shareGreenFont);
}</style>