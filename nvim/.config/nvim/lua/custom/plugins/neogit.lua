-- neogit
return {
  'NeogitOrg/neogit',
  dependencies = {
    'nvim-lua/plenary.nvim', -- required
    'sindrets/diffview.nvim', -- optional - Diff integration

    'folke/snacks.nvim', -- optional
  },
  keys = {
    { '<leader>gn', '<cmd>Neogit<cr>', desc = 'Neogit' },
  },
}
