class UI {
  constructor() {
    this.profileContainer = document.querySelector('#profileContainer');
    this.alert = document.querySelector('#alert');
  }
  showProfile(profile) {
    this.profileContainer.innerHTML = `
    
      <div class="card card-body">
        <div class="row">
          <div class="col-md-3">

          </div>
          <div class="col-md-9">

          </div>
        <div>
      </div>
    
    `;
  }
}