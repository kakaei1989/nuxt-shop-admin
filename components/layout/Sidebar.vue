<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <NuxtLink class="nav-link" :class="{ active: $route.path == '/' }" aria-current="page" to="/">
                        <i class="bi bi-grid me-2"></i>
                        داشبورد
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" :class="{ active: $route.path.includes('/users') }" to="/users">
                        <i class="bi bi-people me-2"></i>
                        کاربران
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" :class="{ active: $route.path.includes('/products') }" to="/products">
                        <i class="bi bi-box-seam me-2"></i>
                        محصولات
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" :class="{ active: $route.path.includes('/categories') }" to="/categories">
                        <i class="bi bi-grid-3x3-gap me-2"></i>
                        دسته بندی
                    </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" :class="{ active: $route.path.includes('/orders') }" to="/orders">
                    <i class="bi bi-grid-3x3-gap me-2"></i>
                    سفارشات
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" :class="{ active: $route.path.includes('/transactions') }" to="/transactions">
                    <i class="bi bi-grid-3x3-gap me-2"></i>
                    تراکنش ها
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" :class="{ active: $route.path.includes('/coupons') }" to="/coupons">
                    <i class="bi bi-grid-3x3-gap me-2"></i>
                    تخفیف ها
                  </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>