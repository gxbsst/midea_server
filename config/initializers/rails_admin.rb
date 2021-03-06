RailsAdmin.config do |config|

  config.main_app_name = ["美的管理后台", ""]

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  config.model 'Huihuo' do
    parent Project
    weight -1
    navigation_icon ' icon-download'
  end

    config.model 'Project' do
      list do
        field :no
        field :name
        field :huihuos do
          searchable :name
        end
      end
      navigation_icon 'icon-th'
      edit do
        field :no do
          label "编号"
        end
        field :state
        field :name
        field :num
        field :leader_design
        field :leader_elec
        field :leader_manufacture
        field :start_plan_at
        field :start_at
        field :shipping_plan_at
        field :shipping_at
        field :debug_plan_at
        field :debug_at
        field :progress_goods
        field :progress_design
        field :progress_elec
        field :note
      end
    end

end
