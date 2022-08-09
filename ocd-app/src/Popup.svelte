<script>
    import { closeModal, closeAllModals, openModal, modals } from 'svelte-modals'
    import { TabContent, TabPane } from 'sveltestrap';
      import { fly } from 'svelte/transition'
      
    export let isOpen
    export let title
      export let onOpenAnother
      
      let stackIndex = $modals.length
  </script>
  
  {#if isOpen}

      <!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
    <div role="dialog" class="modal" transition:fly={{ y: 50 }} on:introstart on:outroend>
        <div class="contents">
            <h3>{title}</h3>

            <TabContent>
                <TabPane tabId="individual" tab="Individual" active>
                    <div class="actions">
                        <button on:click={closeModal}>Cancel</button>
                        <button on:click={closeAllModals}> Sign in with Aut </button>						
                    </div>
                </TabPane>
                <TabPane tabId="organisation" tab="Organisation">
                    <div class="actions">
                        <button on:click={closeModal}>Cancel</button>
                        <button on:click={closeAllModals}> Sign in with Aut </button>						
                    </div>
                </TabPane>
            </TabContent>
            
          </div>
        
    </div>
  {/if}
  
  <style>
    .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
  
      /* allow click-through to backdrop */
      pointer-events: none;
    }
  
    .contents {
      min-width: 240px;
      border-radius: 6px;
      padding: 16px;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      pointer-events: auto;
    }
  
    h2 {
      text-align: center;
      font-size: 24px;
    }
  
    p {
      text-align: center;
      margin-top: 16px;
    }
  
    .actions {
      margin-top: 32px;
      display: flex;
      justify-content: space-between;
          gap: 8px;
    }
  
  </style>