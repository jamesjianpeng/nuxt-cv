<template>
    <div>
        <div class="wrap">
            <ul class="sub-item-content">
                <li>
                    <nuxt-link to="/mysqlPractice/studentCourseSystem" class="nav-text">（一）学生课程管理系统</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MysqlPractice',
    layout: 'home',
    mounted() {
        // this.$router.push({ path: '/mysqlPractice/studentCourseSystem' })
    }
}
</script>

