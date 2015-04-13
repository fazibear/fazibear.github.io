desc 'create a new draft post'
task :post do

  require 'date'

  title = ENV['TITLE']
  slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"

  file = File.join(
    File.dirname(__FILE__),
    '_posts',
    slug + '.md'
  )

  File.open(file, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    layout: post
    title: #{title}
    tags:
    ---

    EOS
  end

  system ("#{ENV['EDITOR']} #{file}")
end
