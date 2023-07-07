<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6"><img src="../img/logo.png" alt="" class="logo" /></div>
   
    </div>
    <br />
    <div class="container">
      <h6>Bordados Sandy</h6>
      <hr>
      <div class="row">
        <!-- productos registrados y realizados hoy  -->
        <div class="col-2"><h6 class="display-6">5</h6></div>
        <div class="col-10">Empleados Activos hoy</div>
      </div>
      <br />
      <div class="row">
        <!-- empleados  -->
        <div class="col-2"><h6 class="display-6">150</h6></div>
        <div class="col-10">Prendas Confeccionadas hoy</div>
      </div>
      <br />
      <div class="row">
        <!-- productos registrados y realizados hoy  -->
        <div class="col-2"><h6 class="display-6">350</h6></div>
        <div class="col-10">Prendas Vendidas</div>
      </div>
      <br />
      <div class="row">
        <!-- productos registrados y realizados hoy  -->
        <div class="col-2"><h6 class="display-6">5</h6></div>
        <div class="col-10">Reservas hoy</div>
      </div>
      <br />
      <div class="row">
        <!-- productos registrados y realizados hoy  -->
        <div class="col-2"><h6 class="display-6">3</h6></div>
        <div class="col-10">Pedidos hoy</div>
      </div>
    </div>
    <hr>
  </div>
</template>

<style>
.logo {
  height: 100px;
  width: 220px;
}
</style>
