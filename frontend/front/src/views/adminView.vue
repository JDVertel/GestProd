<template>

  <div class="container">
    <dir class="row">
      <div class="col-6"><img src="../img/logo.png" alt="" class="logo" /></div>
      <div class="col-6"><h6>Dashboard</h6></div>
    </dir>
   
    <br>

    <div class="row">
      <div class="col-6 col-md-4">
        <div class="card">
          <v-icon name="bi-truck" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/proveedores">Proveedores</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card" >
          <v-icon name="ri-customer-service-2-line" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/clientes">Clientes</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card" >
          <v-icon name="hi-solid-users" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/usuarios">Usuarios</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card" >
          <v-icon name="la-product-hunt" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/productos">Productos</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card" >
          <v-icon name="si-materialdesignicons" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/materiales">Materiales</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card" >
          <v-icon name="hi-document-report" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/informes">Informes</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card" >
          <v-icon name="md-output-outlined" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/produccion">Produccion</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card" >
          <v-icon name="md-bordercolor-outlined" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/pedidos">Pedidos</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="card" >
          <v-icon name="md-shoppingcart-outlined" class="card-img-top iconos"/>
          <div class="card-body">
            <p class="card-text">
              <RouterLink to="/ventas">Ventas</RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script></script>

<style scoped>
.card{
margin: 10px!important;
}
.iconos{
  margin-top: 20px;
  scale:2.5;

}
.card-body{
text-align: center!important;
}
</style>
