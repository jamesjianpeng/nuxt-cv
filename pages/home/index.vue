<template>
    <div>
        <div class="home">
            hello! welcome my world
            <ul class="item-content">
                <li class="item">
                    <nuxt-link to="/css" class="nav-text">CSS</nuxt-link>
                    <ul class="sub-item-content">
                        <!-- <li class="sub-item">
                            <nuxt-link to="/css/icons" class="nav-text">CSS Icons</nuxt-link>
                        </li> -->
                        <li class="sub-item">
                            <nuxt-link to="/css/layouts" class="nav-text">CSS Layouts</nuxt-link>
                            <ul class="sub-item-content">
                                <!-- <li>
                                    关于继承:
                                    <nuxt-link to="/css/layouts/centered/inline/horizontal" class="nav-text">内联元素</nuxt-link>
                                </li> -->
                                <li>
                                    优先级规则:
                                    <nuxt-link to="/css/priority" class="nav-text">CSS 选择器和特殊性</nuxt-link>
                                </li>
                                <li>
                                    水平居中:
                                    <nuxt-link to="/css/layouts/centered/inline/horizontal" class="nav-text">内联元素</nuxt-link>
                                    <nuxt-link to="/css/layouts/centered/block/horizontal" class="nav-text">块元素</nuxt-link>
                                </li>
                                <li>
                                    垂直居中:
                                    <nuxt-link to="/css/layouts/centered/inline/vertical" class="nav-text">内联元素</nuxt-link>
                                    <nuxt-link to="/css/layouts/centered/block/vertical" class="nav-text">块元素</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/css/layouts/centered/horizontalVerticalCentered" class="nav-text">水平垂直居中</nuxt-link>
                                </li>
                                <li>
                                    多栏布局：
                                    <nuxt-link to="/css/layouts/columns/flexTwo" class="nav-text">flex 两栏布局</nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="item">
                    <nuxt-link to="/mysqlPractice" class="nav-text">MySQL的实践</nuxt-link>
                    <ul class="sub-item-content">
                        <li>
                            <nuxt-link to="/mysqlPractice/studentCourseSystem" class="nav-text">（一）学生课程管理系统</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="item">
                    <nuxt-link to="/mysqlPractice" class="nav-text">JavaScript</nuxt-link>
                    <ul class="sub-item-content">
                        <li>
                            <nuxt-link to="/oo" class="nav-text">oo</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="item">
                    <nuxt-link to="/mysqlPractice" class="nav-text">plugin and test</nuxt-link>
                    <ul class="sub-item-content">
                        <li>
                            <nuxt-link to="/plugins/axios" class="nav-text">axios test</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/plugins/vuex" class="nav-text">vuex test</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/plugins/lifeCycle" class="nav-text">lifeCycle</nuxt-link>
                        </li>
                    </ul>
                </li>

                <!-- <li class="item">
                    <nuxt-link to="/threejs" class="nav-text">threejs</nuxt-link>
                    <ul class="sub-item-content">
                        <li class="sub-item">
                            <nuxt-link to="/threejs/rubikCube" class="nav-text">RubikCube</nuxt-link>
                        </li>
                        <li class="sub-item">
                            <nuxt-link to="/threejs/planeGeometry" class="nav-text">PlaneGeometry</nuxt-link>
                        </li>
                    </ul>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeIndex',
    layout: 'home',
}
</script>


<style lang="scss" scoped>
$mainColorLigt: #48a999;
$mainColor: #004c40;
$marginNormal: 15px;
$marginSmall: 8px;

.home {
    .item-content {
        .item {
            margin-top: $marginNormal;
        }
        .item > a {
        }
    }
    .sub-item-content {
        margin-top: $marginSmall;
        .sub-item > a {
        }
    }
    .nav-text {
        color: $mainColorLigt;
        &:hover {
            color: $mainColor;
        }
    }
}
</style>