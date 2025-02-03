function openStepsModal() {
    $.magnificPopup.open({
        items: {
            src: '.js-steps-modal',
            type: 'inline'
        },
    });
}

$(function () {

    $('[autocomplete="cc-number"]').on('input', function (event) {
        const type = event.target.value[0];
        $('.js-credit-type').hide();
        $(`.js-credit-type[data-type="${type}"]`).show();
    });

    $('.js-masked').inputmask();


    $(document).on('click', '.js-tab-btn', function (e) {
        e.preventDefault();
        const $parent = $(this).closest('.js-tabs');
        $parent.find('.js-tab-btn, .js-tab-content').removeClass('is-active');
        $(this).addClass('is-active');

        const id = $(this).data('tab');
        $parent.find(`.js-tab-content[data-tab="${id}"]`).addClass('is-active');



    });

    $(document).on('click', '.js-anchor', function (e) {
        // e.preventDefault();
        $('.js-anchor').removeClass('is-active');
        $(this).addClass('is-active');

    });

    $(document).on('click', '.js-play-audio', function (e) {
        e.preventDefault();
        const $parent = $(this).closest('.js-audio-wrapper');

        $(this).toggleClass('is-playing');
        if ($(this).is('.is-playing')) {
            $parent.find('.js-audio')[0].play();
        } else {
            $parent.find('.js-audio')[0].pause();
        }


    });


    $(document).on('click', '.js-faq-header', function (e) {
        e.preventDefault();

        const $parent = $(this).closest('.js-faq-item');
        $parent.siblings().find('.js-faq-content').slideUp(200);
        $parent.siblings().find('.js-faq-header').removeClass('is-active');
        $(this).toggleClass('is-active');
        $parent.find('.js-faq-content').slideToggle(200);
    });

    $(document).on('click', '.js-dashboard-tab', function (e) {
        e.preventDefault();
        const id = $(this).data('tab');

        $('.js-dashboard-col, .js-dashboard-tab').removeClass('is-active');
        $(`.js-dashboard-col[data-tab="${id}"]`).addClass('is-active');
        $(this).addClass('is-active');
        $('.js-dashboard-info').removeClass('is-active')
    });

    $(document).on('click', '.js-dashboard-toggle', function (e) {
        e.preventDefault();
        $('.js-dashboard-info').toggleClass('is-active')
    });

    $(document).on('click', '.js-filter-toggle', function (e) {
        e.preventDefault();
        $('.js-filter-info').toggleClass('is-active')
    });

    $(document).on('click', '.js-dropdown-btn', function (e) {
        e.preventDefault();
        const $parent = $(this).closest('.js-dropdown-wrapper');
        $(this).toggleClass('is-active')
        $parent.find('.js-dropdown').toggle();
        $('body').toggleClass('dropdown-open');
    });
    $(document).on('click', function (e) {
        $('.js-dropdown').hide();
        $('.js-dropdown-btn').removeClass('is-active')
        $('body').removeClass('dropdown-open');
    })
    $(document).on('click', '.js-dropdown-wrapper', function (e) {
        e.stopPropagation();
    })

    $(document).on('click', '.js-clear', function (e) {
        e.preventDefault();
        $(this).closest('.field').find('input').val('');
    })

    $(document).on('click', '.js-alert-close', function (e) {
        e.preventDefault();
        $(this).closest('.alert').hide();
    })


    $(document).on('click', '.js-verify-modal-open', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '.js-verify-modal',
                type: 'inline'
            },
            callbacks: {
                open: function () {
                    setTimeout(() => {
                        $('.field--verify input').eq(0).focus();
                    }, 300)
                },
                close: function () {
                    location.reload();
                }
            }
        });
    });


    // stripe modal
    $(document).on('click', '.js-open-stripe-modal', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '.js-stripe-modal',
                type: 'inline'
            },
        });
    });

    // creator modal
    $(document).on('click', '.js-open-creator-modal', function (event) {
        event.preventDefault();

        var source = $(this);

        $('#invite-modal-user-text').text(source.data('user'));
        $('#invite-modal-user-input').val(source.data('id'));

        $.magnificPopup.open({
            items: {
                src: '.js-creator-modal',
                type: 'inline'
            },
        });
    });

    // regions modal
    $(document).on('click', '.js-regions-modal-open', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '.js-regions-modal',
                type: 'inline'
            },
        });
    });

    // creators modal
    $(document).on('click', '.js-creators-modal-open', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '.js-creators-modal',
                type: 'inline'
            },
        });
    });

    // size modal
    $(document).on('click', '.js-size-modal-open', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '.js-size-modal',
                type: 'inline'
            },
        });
    });

    // js-excludes-modal
    $(document).on('click', '.js-excludes-modal-open', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '.js-excludes-modal',
                type: 'inline'
            },
        });
    });

    // campaign modal
    $(document).on('click', '.js-view-campaign', function (event) {
        event.preventDefault();
        const index = $(this).data('campaign');

        console.log(index);
        $.magnificPopup.open({
            items: {
                src: `.js-campaign-modal[data-campaign="${index}"]`,
                type: 'inline'
            },
        });
    });

    $(document).on('click', '.js-modal-close', function (event) {
        event.preventDefault();
        $.magnificPopup.close();
    });


    new AirDatepicker('.js-datepicker', {
        locale: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'MM/dd/yyyy',
            timeFormat: 'hh:mm aa',
            firstDay: 0
        }
    });

});
if (document.querySelector('#verify')) {


    window.verifyForm = new Vue({
        el: '#verify',
        delimiters: ['${', '}'],
        components: { VueCountdown },
        data() {
            return {
                value: 'pupa',

                showVerifyPopup: false,
                isFormSubmitted: false,
                formPending: false,
                error: false,

                isSuccess: false,

                currentInput: 0,

                // form
                code: [],

                counting: false,
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.$refs['input-1'][0].focus();
            })
        },
        methods: {
            onChangeClick() {
                window.trest = $('[data-ref="phone"]')[0].focus();

            },
            startCountdown: function () {
                this.counting = true;
            },
            onCountdownEnd: function () {
                this.counting = false;
            },
            onInput(e) {
                this.error = false;
                if (e.target.value && e.target.value.length > 1) {
                    this.code[this.currentInput] = e.target.value[e.target.value.length - 1]
                }
            },
            backspace() {
                if (!this.code[this.currentInput]) {
                    this.currentInput--;
                    if (this.currentInput < 0) this.currentInput = 0;

                }

            },
            sendCode(e) {
                if (this.counting) return;
                this.startCountdown();

                e.preventDefault();

                const form = e.currentTarget.dataset;
                const self = this;

                $.ajax({
                    url: form.action,
                    type: form.method,
                    data: {
                        phone: form.phone,
                    }

                })
                    .done(function () {
                    })
                    .fail(function () {
                    })
                    .always(function () {
                    });
            },
            submit() {
                const form = this.$refs.form;
                const self = this;

                this.formPending = true;

                $.ajax({
                    url: form.action,
                    type: form.method,
                    data: {
                        code: self.code.join(''),
                    }

                })
                    .done(function () {
                        self.isSuccess = true;
                    })
                    .fail(function () {
                        // alert("Error");
                        self.error = true;
                    })
                    .always(function () {
                        self.isFormSubmitted = true;
                        self.formPending = false;
                    });

            }
        },

        watch: {
            code(value) {
                if (value[this.currentInput]) {
                    this.currentInput++
                } else {
                    this.currentInput--
                }

                if (this.currentInput < 0) this.currentInput = 0;
                if (this.currentInput > 5) this.currentInput = 5;

                // if (value.filter(Boolean).length == 6) {
                //     this.submit();
                // }
            },
            currentInput(value) {
                this.$nextTick(() => {
                    this.$refs[`input-${value + 1}`][0].focus();
                })
            }
        }

    })

}
if (document.querySelector('#unsubscribe')) {


    new Vue({
        el: '#unsubscribe',
        delimiters: ['${', '}'],
        data() {
            return {
                tiktok: null,
                payment: null,
                sound: null,

                idea: false,
                step: 1,

            }
        },
        computed: {
            showNextBtn() {
                return (this.step == 1 && this.tiktok) ||
                    (this.step == 2 && this.payment)
            },

            showSubmit() {
                return (this.step == 3 && this.sound)

            }
        },

        watch: {
            sound(value) {
                this.idea = value == this.$refs.idea?.value
            }
        }



    })

}
if (document.querySelector('#creator')) {


    window.creatorForm = new Vue({
        el: '#creator',
        delimiters: ['${', '}'],
        data() {
            return {
                hasChangesPhone: false,
                phoneChange: false,

                hasChangesEmail: false,
                emailChange: false,
            }
        },

        mounted() {
            $(document).on("input", (e) => {
                if (e.target.dataset.ref == 'phone') {
                    this.changePhone(e.target.value);
                }
            });
        },

        methods: {
            changePhone(value) {
                window.verifyForm.value = value.replace('_', '');
                this.hasChangesPhone = true; this.phoneChange = false
            }
        }

    })

}
if (document.querySelector('#typeahead')) {


    new Vue({
        el: '#typeahead',
        delimiters: ['${', '}'],
        data() {
            return {
                query: '',
                options: [],
                url: '',
                name: 'q',
                selected: [],
                showDropdown: false
            }
        },

        mounted() {
            this.search();
            this.$nextTick(() => {
                this.name = this.$refs.search.dataset.name || 'query';

                this.url = this.$refs.search.dataset.url;

                $(window).on('mousedown', () => {
                    this.showDropdown = false;
                });
                $('.field__dropdown').on('mousedown', (event) => {
                    event.stopPropagation();
                });
            })
        },
        methods: {
            removeItem(item) {
                this.selected = this.selected.filter(el => el !== item)
            },
            onEnter(e) {
                e.preventDefault();
            },
            onSelect(item) {
                this.$nextTick(() => {
                    this.query = '';
                })

                if (!this.selected.includes(item)) {
                    this.selected.push(item)
                }
            },

            search: debounce(function () {
                fetch(this.url + '?' + this.name + '=' + this.query)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.options = data;
                    })
            }, 500)

        }
    })

}
if (document.querySelector('#sponsor')) {


    window.sponsorForm = new Vue({
        el: '#sponsor',
        delimiters: ['${', '}'],
        data() {
            return {
                loading: false,
                search: '',
                optionsList: [],
                showList: false,
            }
        },

        mounted() {
            const self = this;
            $(window).on('mousedown', () => {
                this.showList = false
            });

            $('.js-sponsor-dropdown').on('mousedown', function (event) {
                event.stopPropagation();
            });

            $(document).on('click', '.js-add-sponsor', function (event) {
                const id = this.dataset.id;
                self.showList = false;
                // this.closest('.table__row').remove();
                self.onAdd(id, this);
            })

        },

        methods: {

            checkLength() {
                if ($('.js-sponsor-added-list .table__row').length) {
                    $('.js-sponsor-added-list').addClass('has-items')
                } else {
                    $('.js-sponsor-added-list').removeClass('has-items')
                }
            },

            onAdd(id, form) {
                const self = this;

                $.ajax({
                    url: form.dataset.action,
                    type: 'get',
                    data: {
                        id
                    }
                })
                    .done(function (res) {
                        $('.js-sponsor-added-list').append(res);
                        self.checkLength()
                    })
                    .fail(function () {
                    })
                    .always(function () {
                        self.loading = false;
                    });
            },

            getList: debounce(function () {
                this.loading = true;

                let self = this;
                let form = this.$refs.form;

                $.ajax({
                    url: form.dataset.action,
                    type: form.dataset.method || 'get',
                    data: {
                        search: self.search,
                    }
                })
                    .done(function (res) {
                        // console.log(res);
                        $('.js-sponsor-list').html(res)
                    })
                    .fail(function () {
                    })
                    .always(function () {
                        self.loading = false;
                    });

            }, 500),
            onSearch() {
                this.showList = true;
                this.getList();

            }
        }
    })
}


"use strict";