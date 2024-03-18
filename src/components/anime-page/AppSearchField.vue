<template>
    <div class="search__field">
        <input type="text" placeholder="Search..."/>
        <div class="lupe">
            <img src="../../assets/icons/lupe.png" alt="lupe"/>
            <div class="lupe__bg"></div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>   

<style scoped lang="scss">
.search{
	&__field {
		display: flex;
		width: 100%;
		input {
			font-size: 18px;
			padding: 5px;
			background-color: $mainBlack;
			width: 100%;
			&:focus {
				outline: none;
			}
            &::placeholder{
                color: #fff;
            }
		}
	}
}
.lupe {
	width: 50px;
	height: 40px;
	position: relative;
  &:hover {
    cursor: pointer;
  }
	img {
		width: 30px;
		height: 30px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	&__bg {
		width: 100%;
		height: 100%;
		background-color: $mainBlack;
	}
}
</style>