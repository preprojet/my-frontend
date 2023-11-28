
import { Modal } from 'bootstrap';

const RgpPage = () => {

document.querySelector("rgpd").innerHTML = `
<div class="modal">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">RGPD</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>By clicking on accept i accept to giving acces to my peudo and email</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary rgpd-accept">Accept</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>`;
const modal = new Modal(document.querySelector("rgpd"));
modal.show();

}

export default RgpPage;