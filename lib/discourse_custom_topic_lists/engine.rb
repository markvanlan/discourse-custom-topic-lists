# frozen_string_literal: true

module ::DiscourseCustomTopicLists
  class Engine < ::Rails::Engine
    engine_name PLUGIN_NAME
    isolate_namespace DiscourseCustomTopicLists
    config.autoload_paths << File.join(config.root, "lib")
  end
end
