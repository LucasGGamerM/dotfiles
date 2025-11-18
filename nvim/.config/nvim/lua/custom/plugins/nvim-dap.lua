return {
  'mfussenegger/nvim-dap',
  recommended = true,
  desc = 'Debugging support. Requires language specific adapters to be configured. (see lang extras)',

  dependencies = {
    'jay-babu/mason-nvim-dap.nvim',
    'rcarriga/nvim-dap-ui',
    'nvim-neotest/nvim-nio',
    'theHamsta/nvim-dap-virtual-text',
    'mason-org/mason.nvim',
    opts = { ensure_installed = { 'java-debug-adapter', 'java-test' } },
  },

  -- stylua: ignore
  keys = {
    { "<leader>dB", function() require("dap").set_breakpoint(vim.fn.input('Breakpoint condition: ')) end, desc = "Breakpoint Condition" },
    { "<leader>db", function() require("dap").toggle_breakpoint() end, desc = "Toggle Breakpoint" },
    { "<leader>dc", function() require("dap").continue() end, desc = "Run/Continue" },
    { "<leader>da", function() require("dap").continue({ before = get_args }) end, desc = "Run with Args" },
    { "<leader>dC", function() require("dap").run_to_cursor() end, desc = "Run to Cursor" },
    { "<leader>dg", function() require("dap").goto_() end, desc = "Go to Line (No Execute)" },
    { "<leader>di", function() require("dap").step_into() end, desc = "Step Into" },
    { "<leader>dj", function() require("dap").down() end, desc = "Down" },
    { "<leader>dk", function() require("dap").up() end, desc = "Up" },
    { "<leader>dl", function() require("dap").run_last() end, desc = "Run Last" },
    { "<leader>do", function() require("dap").step_out() end, desc = "Step Out" },
    { "<leader>dO", function() require("dap").step_over() end, desc = "Step Over" },
    { "<leader>dP", function() require("dap").pause() end, desc = "Pause" },
    { "<leader>dr", function() require("dap").repl.toggle() end, desc = "Toggle REPL" },
    { "<leader>ds", function() require("dap").session() end, desc = "Session" },
    { "<leader>dt", function() require("dap").terminate() end, desc = "Terminate" },
    { "<leader>dw", function() require("dap.ui.widgets").hover() end, desc = "Widgets" },
  },

  config = function()
    -- load mason-nvim-dap here, after all adapters have been setup
    require('mason-nvim-dap').setup()

    vim.api.nvim_set_hl(0, 'DapStoppedLine', { default = true, link = 'Visual' })

    -- setup dap config by VsCode launch.json file
    local vscode = require 'dap.ext.vscode'
    local json = require 'plenary.json'
    vscode.json_decode = function(str)
      return vim.json.decode(json.json_strip_comments(str))
    end
  end,

  opts = function()
    -- Simple configuration to attach to remote java debug process
    -- Taken directly from https://github.com/mfussenegger/nvim-dap/wiki/Java
    -- local dap = require 'dap'
    -- dap.configurations.java = {
    --   {
    --     type = 'java',
    --     request = 'attach',
    --     name = 'Debug (Attach) - Remote',
    --     hostName = '127.0.0.1',
    --     port = 5005,
    --   },
    -- }
  end,
}
