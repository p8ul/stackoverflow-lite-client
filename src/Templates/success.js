export  const successTemplate = (message) => {
	return `
      <div class="fade text-center ">
        <div class="">
            <img class="table__td__img pull-left hatch" src="assets/img/check.svg" />
            <div class="pull-right text-success mb-15">${message}</div>
        </div>
    </div>`;
};
